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
  selector: '[ngpSize]',
  standalone: true,
})
export class SizeDirective implements OnInit, OnChanges {
  /** Access the element ref */
  readonly #element = inject(ElementRef<HTMLElement>);

  /** Access the renderer */
  readonly #renderer = inject(Renderer2);

  /** Define the size */
  @Input('ngpSize') size: SizeVariant = 'md';

  /** Store the last applied size */
  #size?: SizeVariant;

  ngOnInit(): void {
    this.applySize(this.size);
  }

  ngOnChanges({ size }: SimpleChanges): void {
    this.applySize(size.currentValue);
  }

  private applySize(size: SizeVariant): void {
    this.#renderer.removeClass(this.#element.nativeElement, `ngp-${this.#size}`);
    this.#renderer.addClass(this.#element.nativeElement, `ngp-${size}`);
    this.#size = size;
  }
}

export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
