import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.bgOpacityLight = transformValue(scrollY, [0, 72], [0.5, 0.9]);
    this.bgOpacityDark = transformValue(scrollY, [0, 72], [0.2, 0.8]);
  }
}

function transformValue(
  value: number,
  inputRange: [number, number],
  outputRange: [number, number],
): number {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;
  const inputRangeSize = inputMax - inputMin;
  const outputRangeSize = outputMax - outputMin;
  const relativeValue = value - inputMin;
  const valuePercentage = relativeValue / inputRangeSize;
  const outputValue = valuePercentage * outputRangeSize;
  return outputValue + outputMin;
}
