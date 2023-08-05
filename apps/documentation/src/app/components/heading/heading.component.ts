import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '[docs-heading]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent {}
