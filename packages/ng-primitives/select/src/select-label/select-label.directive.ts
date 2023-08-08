import { Directive, EmbeddedViewRef, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { injectSelect } from '../select/select.token';

@Directive({
  selector: '[ngpSelectLabel]',
  standalone: true,
})
export class NgpSelectLabelDirective {
  /**
   * Access the view container reference.
   */
  private readonly viewContainerRef = inject(ViewContainerRef);

  /**
   * Access the select directive.
   */
  private readonly select = injectSelect();

  /**
   * Access the template reference.
   */
  private readonly templateRef = inject(TemplateRef);

  /**
   * Store the embedded view reference.
   * @internal
   */
  private embeddedViewRef?: EmbeddedViewRef<NgpSelectLabelContext>;

  /**
   * Asserts the correct type of the context for the template that `NgpSelectLabel` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `NgpSelectLabel` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(
    dir: NgpSelectLabelDirective,
    ctx: unknown,
  ): ctx is NgpSelectLabelContext {
    return true;
  }

  ngDoCheck(): void {
    this.update();
  }

  /**
   * Update the value visibility.
   * @internal
   */
  private update(): void {
    // if there is no value then we should show the label
    const shouldShowLabel = this.select.value !== undefined;

    // if the label is already showing then we don't need to do anything
    if (shouldShowLabel && this.embeddedViewRef) {
      // if the value has changed then update the value and run change detection
      if (this.embeddedViewRef.context.$implicit !== this.select.value) {
        this.embeddedViewRef.context.$implicit = this.select.value!;
        this.embeddedViewRef.detectChanges();
      }

      return;
    }

    // if the label is not showing then we need to create it
    if (shouldShowLabel && !this.embeddedViewRef) {
      this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: this.select.value,
      });

      this.embeddedViewRef.detectChanges();
      return;
    }

    // if the label is showing then we need to remove it
    if (!shouldShowLabel && this.embeddedViewRef) {
      this.embeddedViewRef.destroy();
      this.embeddedViewRef = undefined;
      return;
    }
  }
}

export interface NgpSelectLabelContext {
  $implicit: string;
}
