import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  inject,
} from '@angular/core';

@Directive({
  selector: '[ngpColor]',
  standalone: true,
})
export class ColorDirective implements OnChanges {
  /** Access the element ref */
  readonly #element = inject(ElementRef<HTMLElement>);

  /** Access the renderer */
  readonly #renderer = inject(Renderer2);

  /** Define the color */
  @Input('ngpColor') color?: ColorVariant;

  /** Store the last applied color */
  #color?: ColorVariant;

  ngOnChanges({ color }: SimpleChanges): void {
    if (color) {
      this.#renderer.removeClass(this.#element.nativeElement, `ngp-${this.#color}`);
      this.#renderer.addClass(this.#element.nativeElement, `ngp-${this.color}`);
      this.#color = this.color;
    }
  }
}

export type ColorVariant = 'primary' | 'secondary' | 'danger' | string;
