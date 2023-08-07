import { injectContentFiles } from '@analogjs/content';
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
  private readonly files = injectContentFiles();

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
        ...this.files.map(file => {
          // get the filename from the path and remove the extension
          const filename = file.filename.split('/').pop()?.replace('.md', '');

          // the filename will be kebab-case, so we need to convert it to separate words (each word starts with a capital letter)
          const title = filename
            ?.split('-')
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(' ');

          return { title: title, href: `/primitives/${filename}` };
        }),
      ],
    },
  ];
}
