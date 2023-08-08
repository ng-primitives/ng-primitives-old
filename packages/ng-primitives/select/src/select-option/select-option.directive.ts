import { Directive, HostListener, Input } from '@angular/core';
import { injectSelect } from '../select/select.token';

@Directive({
  selector: '[ngpSelectOption]',
  standalone: true,
})
export class NgpSelectOptionDirective {
  /**
   * Access the select directive.
   */
  private readonly select = injectSelect();

  /**
   * The value of the option.
   */
  @Input({ alias: 'ngpSelectOption', required: true }) value!: string;

  /**
   * Select the option.
   */
  @HostListener('click')
  selectOption(): void {
    this.select.select(this.value);
  }
}
