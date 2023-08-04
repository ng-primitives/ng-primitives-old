import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageLinkComponent } from '../page-link/page-link.component';

@Component({
  selector: 'docs-page-navigation',
  standalone: true,
  imports: [CommonModule, PageLinkComponent],
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss'],
})
export class PageNavigationComponent {}
