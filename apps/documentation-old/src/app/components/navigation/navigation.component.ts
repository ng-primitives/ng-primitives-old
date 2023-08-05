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
        { title: 'Introduction', href: '/' },
        { title: 'Getting Started', href: '/quickstart' },
        { title: 'Accessibility', href: '/sdks' },
      ],
    },
    {
      title: 'Primitives',
      links: [
        { title: 'Contacts', href: '/contacts' },
        { title: 'Conversations', href: '/conversations' },
        { title: 'Messages', href: '/messages' },
        { title: 'Groups', href: '/groups' },
        { title: 'Attachments', href: '/attachments' },
      ],
    },
  ];
}
