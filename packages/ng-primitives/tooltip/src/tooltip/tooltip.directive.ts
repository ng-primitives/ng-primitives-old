import { Directive, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgpOverlayDirective } from '@ng-primitives/ng-primitives/overlay';
import { injectTooltipTrigger } from '../tooltip-trigger/tooltip-trigger.token';

/**
 * A unique identifier for the tooltip
 */
let uniqueId = 0;

@Directive({
  selector: '[ngpTooltip]',
  standalone: true,
  exportAs: 'ngpTooltip',
  hostDirectives: [NgpOverlayDirective],
  host: {
    role: 'tooltip',
  },
})
export class NgpTooltipDirective implements OnInit, OnChanges {
  /**
   * Access the tooltip trigger
   */
  private readonly trigger = injectTooltipTrigger();

  /**
   * Define the tooltip id
   */
  @Input() id = `ngp-tooltip-${uniqueId++}`;

  ngOnInit(): void {
    this.trigger.setTooltipId(this.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('id' in changes) {
      this.trigger.setTooltipId(this.id);
    }
  }
}
