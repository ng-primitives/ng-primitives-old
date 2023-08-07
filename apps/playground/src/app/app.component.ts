import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NgpRadioGroupDirective,
  NgpRadioIndicatorDirective,
  NgpRadioItemDirective,
} from '@ng-primitives/ng-primitives/radio';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NgpRadioGroupDirective,
    NgpRadioItemDirective,
    NgpRadioIndicatorDirective,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  value?: string;
}
