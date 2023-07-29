import { InjectionToken } from '@angular/core';
import type { NgpAccordionPanelDirective } from './accordion-panel.directive';

export const NgpAccordionPanel = new InjectionToken<NgpAccordionPanelDirective>(
  'NgpAccordionPanel',
);
