import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDown } from '@ng-icons/heroicons/outline';
import {
  NgpSelectDirective,
  NgpSelectGroupDirective,
  NgpSelectGroupLabelDirective,
  NgpSelectIconDirective,
  NgpSelectLabelDirective,
  NgpSelectOptionDirective,
  NgpSelectOptionsDirective,
  NgpSelectPlaceholderDirective,
} from '@ng-primitives/ng-primitives/select';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NgpSelectDirective,
    NgpSelectGroupDirective,
    NgpSelectGroupLabelDirective,
    NgpSelectOptionDirective,
    NgpSelectOptionsDirective,
    NgpSelectLabelDirective,
    NgpSelectPlaceholderDirective,
    NgpSelectIconDirective,
    NgIconComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [provideIcons({ heroChevronDown })],
})
export class AppComponent {
  options = ['Option 1', 'Option 2', 'Option 3'];
  value?: string = this.options[0];
}
