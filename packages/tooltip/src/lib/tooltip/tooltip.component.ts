import { CommonModule } from '@angular/common';
import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
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
  },
})
export class NgpTooltipComponent {
  /**
   * Define the tooltip content.
   */
  content!: TemplateRef<void> | string;

  /**
   * Define if the tooltip should have an arrow.
   * @default true
   */
  showArrow: boolean = true;

  /**
   * Access the tooltip arrow element.
   */
  @ViewChild('arrow', { static: true }) arrow!: ElementRef<HTMLElement>;

  /**
   * The position of the tooltip
   */
  position?: Partial<Coords>;

  /**
   * The position of the tooltip arrow
   */
  arrowPosition?: Partial<Coords>;
}
