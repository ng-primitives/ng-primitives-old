import { Directive, Input, OnInit, booleanAttribute } from '@angular/core';
import {
  NgpRovingFocusGroupDirective,
  injectRovingFocusGroup,
} from '@ng-primitives/ng-primitives/roving-focus';
import { injectTabsetConfig } from '../config/tabset.config';
import { injectTabset } from '../tabset/tabset.token';

@Directive({
  selector: '[ngpTabList]',
  standalone: true,
  host: {
    role: 'tablist',
    '[attr.aria-orientation]': 'tabset.orientation',
    '[attr.data-orientation]': 'tabset.orientation',
  },
  hostDirectives: [
    {
      directive: NgpRovingFocusGroupDirective,
      inputs: ['ngpRovingFocusGroupWrap: wrap'],
    },
  ],
})
export class NgpTabListDirective implements OnInit {
  /**
   * Access the global tab configuration
   */
  private readonly config = injectTabsetConfig();

  /**
   * Access the tabset
   */
  protected readonly tabset = injectTabset();

  /**
   * Access the roving focus group directive
   */
  private readonly rovingFocus = injectRovingFocusGroup();

  /**
   * Whether focus should wrap within the tab list when using the keyboard.
   * @default true
   */
  @Input({ alias: 'ngpTabListWrap', transform: booleanAttribute }) wrap = this.config.wrap;

  ngOnInit(): void {
    this.rovingFocus.setOrientation(this.tabset.orientation);
  }
}
