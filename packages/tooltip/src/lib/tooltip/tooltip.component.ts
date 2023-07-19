import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Coords } from '@floating-ui/dom';

@Component({
  selector: 'ngp-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  host: {
    '[style.left.px]': 'position?.x',
    '[style.top.px]': 'position?.y',
    '[style.opacity]': 'open ? 1 : 0',
  },
})
export class NgpTooltipComponent {
  /**
   * Define the tooltip content.
   */
  content!: TemplateRef<void> | string;

  /**
   * The position of the tooltip
   */
  position?: Partial<Coords>;

  /**
   * Define the tooltip open state.
   * @default false
   */
  protected open?: boolean;

  /**
   * Store the open timeout.
   */
  #showTimeout?: number;

  /**
   * Store the close timeout.
   */
  #hideTimeout?: number;

  /**
   * Determine if the content is a template.
   */
  get templateOutlet(): TemplateRef<void> {
    return this.content instanceof TemplateRef ? this.content : this.defaultContent;
  }

  /**
   * Access the default tooltip content.
   */
  @ViewChild('defaultContent') readonly defaultContent!: TemplateRef<void>;

  /**
   * Open the tooltip.
   */
  show(delay: number): void {
    clearInterval(this.#hideTimeout);
    this.#showTimeout = setTimeout(() => (this.open = true), delay);
  }

  /**
   * Close the tooltip.
   * @param delay
   * @param callback
   */
  hide(delay: number, callback?: () => void): void {
    clearInterval(this.#showTimeout);
    this.#hideTimeout = setTimeout(() => {
      this.open = false;
      callback?.();
    }, delay);
  }
}
