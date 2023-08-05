import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMoon, heroSun } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'docs-mode-toggle',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './mode-toggle.component.html',
  styleUrls: ['./mode-toggle.component.scss'],
  viewProviders: [provideIcons({ heroMoon, heroSun })],
})
export class ModeToggleComponent {
  disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  }

  toggleMode() {
    this.disableTransitionsTemporarily();

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const isSystemDarkMode = darkModeMediaQuery.matches;
    const isDarkMode = document.documentElement.classList.toggle('dark');

    if (isDarkMode === isSystemDarkMode) {
      window.localStorage.removeItem('isDarkMode');
    } else {
      window.localStorage.setItem('isDarkMode', isDarkMode ? 'true' : 'false');
    }
  }
}
