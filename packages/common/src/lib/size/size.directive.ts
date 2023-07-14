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
  selector: '[ngpSize]',
  standalone: true,
})
export class SizeDirective implements OnChanges {
  /** Access the element ref */
  readonly #element = inject(ElementRef<HTMLElement>);

  /** Access the renderer */
  readonly #renderer = inject(Renderer2);

  /** Define the size */
  @Input('ngpSize') size: SizeVariant = 'md';

  /** Store the last applied size */
  #size?: SizeVariant;

  ngOnChanges({ size }: SimpleChanges): void {
    if (size) {
      this.#renderer.removeClass(this.#element.nativeElement, `ngp-${this.#size}`);
      this.#renderer.addClass(this.#element.nativeElement, `ngp-${this.size}`);
      this.#size = this.size;
    }
  }
}

export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
