import { Directive, EventEmitter, Input, Output, booleanAttribute, computed } from '@angular/core';
import { injectAccordion } from '../accordion/accordion.token';
import { NgpAccordionStateDirective } from '../common/accordion-state.directive';
import { NgpAccordionPanelToken } from './accordion-panel.token';

/**
 * A unique id for the panel.
 */
let uniqueId = 0;

@Directive({
  selector: '[ngpAccordionPanel]',
  standalone: true,
  providers: [{ provide: NgpAccordionPanelToken, useExisting: NgpAccordionPanelDirective }],
  hostDirectives: [NgpAccordionStateDirective],
})
export class NgpAccordionPanelDirective {
  /**
   * Access the accordion the panel belongs to.
   */
  private readonly accordion = injectAccordion();

  /**
   * Determines whether the panel should be expanded.
   * @default false
   */
  @Input({ alias: 'ngpAccordionPanelExpanded', transform: booleanAttribute }) expanded = false;

  /**
   * Determines whether the panel should be disabled.
   * @default false
   */
  @Input({ alias: 'ngpAccordionPanelDisabled', transform: booleanAttribute }) disabled = false;

  /**
   * Event emitted when the panel is expanded.
   */
  @Output('ngpAccordionPanelExpandedChange') readonly expandedChange = new EventEmitter<boolean>();

  /**
   * The unique id of the panel.
   * @internal
   */
  readonly id = `ngp-accordion-panel-${uniqueId++}`;

  /**
   * Determine if this panel is expanded.
   * @internal
   */
  readonly isExpanded = computed(() => this.accordion.expanded().includes(this.id));

  /**
   * Toggle the expanded state of the panel.
   */
  toggle(): void {
    // If the accordion or panel is disabled, do nothing.
    if (this.accordion.disabled || this.disabled) {
      return;
    }

    if (this.isExpanded()) {
      this.accordion.collapse(this.id);
    } else {
      this.accordion.expand(this.id);
    }

    this.expandedChange.emit(this.isExpanded());
  }
}
