import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngpTooltipTrigger]',
  standalone: true,
})
export class NgpTooltipTriggerDirective {
  /**
   * Define the the tooltip to display.
   * @required
   */
  @Input({ alias: 'ngpTooltipTrigger', required: true }) tooltip!: TemplateRef<void>;
}
