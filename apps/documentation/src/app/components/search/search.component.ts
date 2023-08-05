import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'docs-search',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  viewProviders: [provideIcons({ heroMagnifyingGlass })],
})
export class SearchComponent {
  modifierKey = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl ';
}
