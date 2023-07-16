import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';
import { NgpButtonComponent } from '@ng-primitives/button';
import { NgpInputComponent, NgpInputGroupComponent } from '@ng-primitives/input';

@Component({
  standalone: true,
  imports: [NgpButtonComponent, NgpInputComponent, NgpInputGroupComponent, NgIconComponent],
  selector: 'ng-primitives-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [provideIcons({ lucideSearch })],
})
export class AppComponent {}
