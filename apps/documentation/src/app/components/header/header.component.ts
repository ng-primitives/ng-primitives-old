import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MobileNavigationComponent } from '../mobile-navigation/mobile-navigation.component';
import { MobileSearchComponent } from '../mobile-search/mobile-search.component';
import { ModeToggleComponent } from '../mode-toggle/mode-toggle.component';
import { SearchComponent } from '../search/search.component';
import { TopLevelNavItemComponent } from '../top-level-nav-item/top-level-nav-item.component';

@Component({
  selector: 'docs-header',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    MobileSearchComponent,
    MobileNavigationComponent,
    ModeToggleComponent,
    TopLevelNavItemComponent,
    ButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isInsideMobileNavigation = false;
  mobileNavIsOpen = false;
  bgOpacityLight = 0.5;
  bgOpacityDark = 0.2;
}
