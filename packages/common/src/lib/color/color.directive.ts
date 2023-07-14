import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  inject,
} from '@angular/core';

@Directive({
  selector: '[ngpColor]',
  standalone: true,
})
export class ColorDirective implements OnInit, OnChanges {
  /** Access the element ref */
  readonly #element = inject(ElementRef<HTMLElement>);

  /** Access the renderer */
  readonly #renderer = inject(Renderer2);

  /** Define the color */
  @Input('ngpColor') color: ColorVariant = 'primary';

  /** Store the last applied color */
  #color?: ColorVariant;

  ngOnInit(): void {
    this.applyColor(this.color);
  }

  ngOnChanges({ color }: SimpleChanges): void {
    this.applyColor(color.currentValue);
  }

  private applyColor(color: ColorVariant): void {
    this.#renderer.removeClass(this.#element.nativeElement, `ngp-${this.#color}`);
    this.#renderer.addClass(this.#element.nativeElement, `ngp-${color}`);
    this.#color = color;
  }
}

export type ColorVariant = 'primary' | 'secondary' | 'danger' | string;
