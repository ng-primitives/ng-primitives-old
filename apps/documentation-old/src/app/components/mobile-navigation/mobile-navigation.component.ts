import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3 } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'docs-mobile-navigation',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss'],
  viewProviders: [provideIcons({ heroBars3 })],
})
export class MobileNavigationComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
