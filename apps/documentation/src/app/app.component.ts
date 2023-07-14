import { Component } from '@angular/core';
import { ButtonComponent } from '@ng-primitives/button';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  selector: 'ng-primitives-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'documentation';
}
