import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HeroPatternComponent } from '../hero-pattern/hero-pattern.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'docs-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    HeroPatternComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
