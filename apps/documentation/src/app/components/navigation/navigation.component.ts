import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationGroupComponent } from '../navigation-group/navigation-group.component';

@Component({
  selector: 'docs-navigation',
  standalone: true,
  imports: [CommonModule, NavigationGroupComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  groups = [
    {
      title: 'Overview',
      links: [
        { title: 'Introduction', href: '/introduction' },
        { title: 'Getting Started', href: '/getting-started' },
      ],
    },
    {
      title: 'Primitives',
      links: [
        { title: 'Accordion', href: '/primitives/accordion' },
        { title: 'Avatar', href: '/primitives/avatar' },
        { title: 'Progress', href: '/primitives/progress' },
        { title: 'Resize', href: '/primitives/resize' },
        { title: 'Roving Focus', href: '/primitives/roving-focus' },
        { title: 'Separator', href: '/primitives/separator' },
        { title: 'Switch', href: '/primitives/switch' },
        { title: 'Tabs', href: '/primitives/tabs' },
        { title: 'Toggle', href: '/primitives/toggle' },
        { title: 'Toggle Group', href: '/primitives/toggle-group' },
        { title: 'Tooltip', href: '/primitives/tooltip' },
        { title: 'Visually Hidden', href: '/primitives/visually-hidden' },
      ],
    },
  ];
}
