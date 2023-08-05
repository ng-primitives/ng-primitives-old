import { Component, HostListener, OnInit } from '@angular/core';
import { ComponentDocsComponent } from './components/component-docs/component-docs.component';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  standalone: true,
  imports: [LayoutComponent, ComponentDocsComponent],
  selector: 'docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  ngOnInit(): void {
    this.updateMode();
    this.darkModeMediaQuery.addEventListener('change', () => this.updateModeWithoutTransitions());
  }

  updateMode(): void {
    const isSystemDarkMode = this.darkModeMediaQuery.matches;
    const isDarkMode =
      window.localStorage.getItem('isDarkMode') === 'true' ||
      (!window.localStorage.getItem('isDarkMode') && isSystemDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if (isDarkMode === isSystemDarkMode) {
      window.localStorage.removeItem('isDarkMode');
    }
  }

  disableTransitionsTemporarily(): void {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  }

  @HostListener('window:storage')
  updateModeWithoutTransitions() {
    this.disableTransitionsTemporarily();
    this.updateMode();
  }
}
