import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import {
  AfterContentInit,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  booleanAttribute,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { startWith } from 'rxjs';
import { fromResizeEvent } from '../../../resize/src';
import { NgpSelectOptionsDirective } from '../select-options/select-options.directive';
import { NgpSelectToken } from './select.token';

@Directive({
  selector: '[ngpSelect]',
  standalone: true,
  host: {
    role: 'combobox',
    'aria-autocomplete': 'none',
    '[attr.data-state]': 'open ? "open" : "closed"',
    '[attr.data-disabled]': 'disabled ? "" : undefined',
    '[attr.data-placeholder]': 'value === undefined ? "" : undefined',
    '[disabled]': 'disabled',
    // aria-controls={context.contentId}
    // aria-expanded={context.open}
    // aria-required={context.required}
  },
  hostDirectives: [CdkOverlayOrigin],
  providers: [
    { provide: NgpSelectToken, useExisting: NgpSelectDirective },
    { provide: NG_VALUE_ACCESSOR, useExisting: NgpSelectDirective, multi: true },
  ],
})
export class NgpSelectDirective implements OnInit, AfterContentInit, ControlValueAccessor {
  /**
   * Access the connected overlay directive.
   * @internal
   */
  readonly overlayOrigin = inject(CdkOverlayOrigin);

  /**
   * Access the element reference.
   */
  private readonly elementRef = inject(ElementRef);

  /**
   * Access the destroy reference.
   */
  private readonly destroy$ = inject(DestroyRef);

  /**
   * The value of the select.
   */
  @Input('ngpSelectValue') value?: string;

  /**
   * The open state of the select.
   * @default false
   */
  @Input({ alias: 'ngpSelectOpen', transform: booleanAttribute }) open: boolean = false;

  /**
   * The disabled state of the select.
   * @default false
   */
  @Input({ alias: 'ngpSelectDisabled', transform: booleanAttribute }) disabled: boolean = false;

  /**
   * Event emitted when the select value changes.
   */
  @Output('ngpSelectValueChange') readonly valueChange = new EventEmitter<string>();

  /**
   * Event emitted when the select open state changes.
   */
  @Output('ngpSelectOpenChange') readonly openChange = new EventEmitter<boolean>();

  /**
   * Access the select options.
   * @internal
   */
  @ContentChildren(NgpSelectOptionsDirective)
  readonly optionsList?: QueryList<NgpSelectOptionsDirective>;

  /**
   * The onChange callback for the registered ControlValueAccessor.
   * @internal
   */
  private onChange?: (value: string) => void;

  /**
   * The onTouched callback for the registered ControlValueAccessor.
   * @internal
   */
  private onTouched?: () => void;

  ngOnInit(): void {
    // if the select trigger changes size, we need to reposition the overlay
    fromResizeEvent(this.elementRef.nativeElement)
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(({ width }) => this.optionsList?.get(0)?.updateWidth(width));
  }

  ngAfterContentInit(): void {
    // anytime the options list changes, we need to set the origin
    this.optionsList?.changes
      .pipe(startWith(this.optionsList), takeUntilDestroyed(this.destroy$))
      .subscribe(() => this.optionsList?.get(0)?.setOrigin(this.elementRef));
  }

  /**
   * Handle value changes from Angular Forms.
   * @param value The new value.
   * @internal
   */
  writeValue(value: string): void {
    this.value = value;
  }

  /**
   * Register a callback to be triggered when the value changes.
   * @param fn The callback to register.
   * @internal
   */
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  /**
   * Register a callback to be triggered when the select is touched.
   * @param fn The callback to register.
   * @internal
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * Set the disabled state of the select.
   * @param isDisabled The disabled state.
   * @internal
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Whenever the select loses focus, we trigger the onTouched callback.
   */
  @HostListener('blur')
  protected onBlur(): void {
    this.onTouched?.();
  }

  /**
   * Show the select options.
   * @internal
   */
  @HostListener('click')
  show(): void {
    this.optionsList?.get(0)?.open();
  }

  /**
   * Select an option.
   */
  select(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
    this.onChange?.(value);
    this.optionsList?.get(0)?.close();
  }
}
