import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'li[docs-property]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
  host: {
    class: 'm-0 px-0 py-4 first:pt-0 last:pb-0',
  },
})
export class PropertyComponent {
  /**
   * Define the name of the property.
   */
  @Input({ required: true }) name!: string;

  /**
   * Define the type of the property.
   */
  @Input({ required: true }) type!: string;

  /**
   * Define the desciption of the property.
   */
  @Input({ required: true }) description!: string;
}
