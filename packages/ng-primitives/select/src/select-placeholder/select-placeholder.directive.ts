import {
  Directive,
  DoCheck,
  EmbeddedViewRef,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { injectSelect } from '../select/select.token';

@Directive({
  selector: '[ngpSelectPlaceholder]',
  standalone: true,
})
export class NgpSelectPlaceholderDirective implements DoCheck {
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
  private embeddedViewRef?: EmbeddedViewRef<void>;

  ngDoCheck(): void {
    this.update();
  }

  /**
   * Update the placeholder visibility.
   * @internal
   */
  private update(): void {
    // if there is no value then we should show the placeholder
    const shouldShowPlaceholder = this.select.value === undefined;

    // if the placeholder is already showing then we don't need to do anything
    if (shouldShowPlaceholder && this.embeddedViewRef) {
      return;
    }

    // if the placeholder is not showing then we need to create it
    if (shouldShowPlaceholder && !this.embeddedViewRef) {
      this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
      return;
    }

    // if the placeholder is showing then we need to remove it
    if (!shouldShowPlaceholder && this.embeddedViewRef) {
      debugger;
      this.embeddedViewRef.destroy();
      this.embeddedViewRef = undefined;
      return;
    }
  }
}
