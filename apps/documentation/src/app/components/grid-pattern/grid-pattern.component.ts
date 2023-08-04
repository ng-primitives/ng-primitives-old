import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

let uniqueId = 0;

@Component({
  selector: 'docs-grid-pattern',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-pattern.component.html',
  styleUrls: ['./grid-pattern.component.scss'],
})
export class GridPatternComponent {
  patternId = `grid-pattern-${uniqueId++}`;

  @Input({ required: true }) x!: number;
  @Input({ required: true }) y!: number;
  @Input({ required: true }) width!: number;
  @Input({ required: true }) height!: number;
  @Input({ required: true }) squares!: [number, number][];
}
