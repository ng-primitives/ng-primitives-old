import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'docs-mobile-search',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './mobile-search.component.html',
  styleUrls: ['./mobile-search.component.scss'],
  viewProviders: [provideIcons({ heroMagnifyingGlass })],
})
export class MobileSearchComponent {}
