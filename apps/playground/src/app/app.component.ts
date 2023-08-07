import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NgpSelectDirective,
  NgpSelectGroupDirective,
  NgpSelectGroupLabelDirective,
  NgpSelectOptionDirective,
  NgpSelectOptionsDirective,
  NgpSelectTriggerDirective,
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
    NgpSelectTriggerDirective,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  value?: string;
  options = ['Option 1', 'Option 2', 'Option 3'];
}
