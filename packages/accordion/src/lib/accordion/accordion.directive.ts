import { Directive, HostBinding, Input, booleanAttribute, signal } from '@angular/core';
import { NgpAccordion } from './accordion.token';

@Directive({
  selector: '[ngpAccordion]',
  standalone: true,
  providers: [{ provide: NgpAccordion, useExisting: NgpAccordionDirective }],
})
export class NgpAccordionDirective {
  /**
   * Determines whether multiple panels can be open simultaneously.
   * @default false
   */
  @Input({ alias: 'ngpAccordionMultiple', transform: booleanAttribute }) multiple = false;

  /**
   * The orientation of the accordion.
   * @default 'vertical'
   */
  @HostBinding('attr.data-orientation')
  @Input({ alias: 'ngpAccordionOrientation' })
  orientation: 'horizontal' | 'vertical' = 'vertical';

  /**
   * Determines whether the accordion should be disabled.
   * @default false
   */
  @Input({ alias: 'ngpAccordionDisabled', transform: booleanAttribute }) disabled = false;

  /**
   * Store the currently expanded panel(s).
   * @internal
   */
  readonly expanded = signal<string[]>([]);

  /**
   * Expand a panel.
   * @param id The id of the panel to expand.
   */
  expand(id: string): void {
    this.expanded.set(this.multiple ? [...this.expanded(), id] : [id]);
  }

  /**
   * Collapse a panel.
   * @param id The id of the panel to collapse.
   */
  collapse(id: string): void {
    this.expanded.set(this.expanded().filter(expandedId => expandedId !== id));
  }

  /**
   * Toggle a panel.
   * @param id The id of the panel to toggle.
   */
  toggle(id: string): void {
    if (this.expanded().includes(id)) {
      this.collapse(id);
    } else {
      this.expand(id);
    }
  }

  /**
   * Collapse all panels.
   */
  collapseAll(): void {
    this.expanded.set([]);
  }
}
