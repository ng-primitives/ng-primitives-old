import { Component } from '@angular/core';
import { NgpButtonComponent } from '@ng-primitives/button';
import { NgpInputComponent } from '@ng-primitives/input';

@Component({
  standalone: true,
  imports: [NgpButtonComponent, NgpInputComponent],
  selector: 'ng-primitives-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
