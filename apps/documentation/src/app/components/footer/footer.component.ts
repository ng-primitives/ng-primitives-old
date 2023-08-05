import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { radixGithubLogo, radixTwitterLogo } from '@ng-icons/radix-icons';
import { PageNavigationComponent } from '../page-navigation/page-navigation.component';

@Component({
  selector: 'docs-footer',
  standalone: true,
  imports: [CommonModule, NgIconComponent, PageNavigationComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  viewProviders: [provideIcons({ radixTwitterLogo, radixGithubLogo })],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
