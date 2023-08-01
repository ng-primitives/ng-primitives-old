import {
  AfterContentInit,
  ContentChildren,
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList,
  booleanAttribute,
} from '@angular/core';
import { injectTabsetConfig } from '../providers/tabset.config';
import { NgpTabPanelDirective } from '../tab-panel/tab-panel.directive';
import { NgpTabsetToken } from './tabset.token';

/**
 * Define a unique id for the tabset
 */
let uniqueId = 0;

@Directive({
  selector: '[ngpTabset]',
  standalone: true,
  providers: [{ provide: NgpTabsetToken, useExisting: NgpTabsetDirective }],
  host: {
    '[attr.id]': 'id',
    '[attr.data-orientation]': 'orientation',
  },
})
export class NgpTabsetDirective implements AfterContentInit {
  /**
   * Access the global tabset configuration
   */
  private readonly config = injectTabsetConfig();

  /**
   * Define the id for the tabset
   */
  @Input()
  id: string = `ngp-tabset-${uniqueId++}`;

  /**
   * Define the active tab
   */
  @Input('ngpTabsetValue') value?: string;

  /**
   * The orientation of the tabset
   * @default 'horizontal'
   */
  @Input('ngpTabsetOrientation')
  orientation: 'horizontal' | 'vertical' = this.config.orientation;

  /**
   * Whether tabs should activate on focus
   */
  @Input({ alias: 'ngpTabsetActivateOnFocus', transform: booleanAttribute }) activateOnFocus =
    this.config.activateOnFocus;

  /**
   * Event emitted when the active tab changes
   */
  @Output('ngpTabsetValueChange') readonly valueChange = new EventEmitter<string>();

  /**
   * Access the tabs within the tabset
   * @internal
   */
  @ContentChildren(NgpTabPanelDirective, { descendants: true })
  panels?: QueryList<NgpTabPanelDirective>;

  ngAfterContentInit(): void {
    // select the first tab if no value is set
    if (!this.value && this.panels?.length) {
      this.select(this.panels.first.value);
    }
  }

  /**
   * Select a tab by its value
   * @param value The value of the tab to select
   */
  select(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}
