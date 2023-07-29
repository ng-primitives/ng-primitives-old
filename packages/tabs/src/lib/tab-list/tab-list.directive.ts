import { Directive, Input, booleanAttribute } from '@angular/core';
import { injectTabsetConfig } from '../providers/tabset.config';
import { injectTabset } from '../tabset/tabset.token';

@Directive({
  selector: '[ngpTabList]',
  standalone: true,
  host: {
    '[attr.data-orientation]': 'tabset.orientation',
  },
})
export class NgpTabListDirective {
  /**
   * Access the global tab configuration
   */
  private readonly config = injectTabsetConfig();

  /**
   * Access the tabset
   */
  protected readonly tabset = injectTabset();

  /**
   * Whether focus should loop within the tab list when using the keyboard.
   * @default true
   */
  @Input({ alias: 'ngpTabListLoop', transform: booleanAttribute }) loop = this.config.loop;
}
