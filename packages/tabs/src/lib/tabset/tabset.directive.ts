import {
  Directive,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  booleanAttribute,
} from '@angular/core';
import { injectTabsetConfig } from '../providers/tabset.config';
import { NgpTabsetToken } from './tabset.token';

@Directive({
  selector: '[ngpTabset]',
  standalone: true,
  providers: [{ provide: NgpTabsetToken, useExisting: NgpTabsetDirective }],
})
export class NgpTabsetDirective {
  /**
   * Access the global tabset configuration
   */
  private readonly config = injectTabsetConfig();

  /**
   * Define the active tab
   */
  @Input('ngpTabsetValue') value?: string;

  /**
   * The orientation of the tabset
   * @default 'horizontal'
   */
  @HostBinding('attr.data-orientation')
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
  @Output('ngpTabsetChange') readonly valueChange = new EventEmitter<string>();

  /**
   * Select a tab by its value
   * @param value The value of the tab to select
   */
  select(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}
