import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'li[docs-navigation-group]',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation-group.component.html',
  styleUrls: ['./navigation-group.component.scss'],
})
export class NavigationGroupComponent {
  /**
   * Access the router
   */
  private readonly router = inject(Router);

  @Input({ required: true }) group!: NavigationGroup;

  /**
   * Determine if a href is active
   */
  isActive(href: string): boolean {
    return this.router.isActive(href, {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
}

export interface NavigationGroup {
  title: string;
  links: { title: string; href: string }[];
}
