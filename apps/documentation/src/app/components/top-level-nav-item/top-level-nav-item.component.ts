import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'a[docs-top-level-nav-item]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-level-nav-item.component.html',
  styleUrls: ['./top-level-nav-item.component.scss'],
})
export class TopLevelNavItemComponent {}
