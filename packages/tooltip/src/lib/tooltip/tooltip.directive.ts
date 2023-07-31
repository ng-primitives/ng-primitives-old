import { Directive } from '@angular/core';
import { NgpOverlayDirective } from '@ng-primitives/overlay';

@Directive({
  selector: '[ngpTooltip]',
  standalone: true,
  exportAs: 'ngpTooltip',
  hostDirectives: [NgpOverlayDirective],
})
export class NgpTooltipDirective {}
