import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GridPatternComponent } from '../grid-pattern/grid-pattern.component';

@Component({
  selector: 'docs-hero-pattern',
  standalone: true,
  imports: [CommonModule, GridPatternComponent],
  templateUrl: './hero-pattern.component.html',
  styleUrls: ['./hero-pattern.component.scss'],
})
export class HeroPatternComponent {}
