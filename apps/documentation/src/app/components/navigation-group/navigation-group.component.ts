import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'li[docs-navigation-group]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-group.component.html',
  styleUrls: ['./navigation-group.component.scss'],
})
export class NavigationGroupComponent {
  @Input({ required: true }) group!: NavigationGroup;
}

export interface NavigationGroup {
  title: string;
  links: { title: string; href: string }[];
}
