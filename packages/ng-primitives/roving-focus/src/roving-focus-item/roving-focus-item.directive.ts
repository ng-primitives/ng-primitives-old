import { FocusableOption } from '@angular/cdk/a11y';
import {
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  booleanAttribute,
  inject,
  numberAttribute,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { injectRovingFocusGroup } from '../roving-focus-group/roving-focus-group.token';
import { NgpRovingFocusItemToken } from './roving-focus-item.token';

@Directive({
  selector: '[ngpRovingFocusItem]',
  standalone: true,
  providers: [{ provide: NgpRovingFocusItemToken, useExisting: NgpRovingFocusItemDirective }],
})
export class NgpRovingFocusItemDirective implements OnInit, OnDestroy, FocusableOption {
  /**
   * Access the group the roving focus item belongs to.
   */
  private readonly group = injectRovingFocusGroup();

  /**
   * Access the element reference of the roving focus item.
   */
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  /**
   * Access the destroyRef
   */
  private readonly destroyRef = inject(DestroyRef);

  /**
   * Access the change detector ref
   */
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  /**
   * Define the order of the roving focus item in the group.
   */
  @Input({ alias: 'ngpRovingFocusItemOrder', transform: numberAttribute }) order: number = 0;

  /**
   * Define if the item is disabled.
   */
  @Input({ alias: 'ngpRovingFocusItemDisabled', transform: booleanAttribute }) disabled: boolean =
    false;

  /**
   * Derive the tabindex of the roving focus item.
   * @internal
   */
  @HostBinding('attr.tabindex')
  get tabindex(): number {
    return this.group.keyManager.activeItem === this ? 0 : -1;
  }

  ngOnInit(): void {
    // register the roving focus item with the group
    this.group.register(this);

    // listen for changes to the active item and run change detection
    this.group.keyManager.change
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.changeDetectorRef.markForCheck());
  }

  ngOnDestroy(): void {
    // unregister the roving focus item with the group
    this.group.unregister(this);
  }

  /**
   * Handle key events on the roving focus item.
   * @param event The key event.
   * @internal
   */
  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    this.group.onKeydown(event);
  }

  /**
   * Focus the roving focus item.
   * @param origin The origin of the focus request.
   * @internal
   */
  focus(): void {
    this.elementRef?.nativeElement.focus();
  }
}
