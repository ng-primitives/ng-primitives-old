import { Directive } from '@angular/core';
import { NgpAccordionStateDirective } from '../common/accordion-state.directive';

@Directive({
  selector: '[ngpAccordionHeader]',
  standalone: true,
  hostDirectives: [NgpAccordionStateDirective],
})
export class NgpAccordionHeaderDirective {}
