import { Directive } from '@angular/core';

@Directive({
  selector: '[ngpSelectIcon]',
  standalone: true,
  host: {
    'aria-hidden': 'true',
  },
})
export class NgpSelectIconDirective {}
