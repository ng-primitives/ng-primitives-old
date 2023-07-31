import { Directive } from '@angular/core';
import { NgpOverlayArrowDirective } from '@ng-primitives/overlay';

@Directive({
  selector: '[ngpTooltipArrow]',
  standalone: true,
  hostDirectives: [NgpOverlayArrowDirective],
})
export class NgpTooltipArrowDirective {}
