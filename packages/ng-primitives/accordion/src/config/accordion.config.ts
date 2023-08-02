import { InjectionToken, Provider, inject } from '@angular/core';

export const NgpAccordionConfigToken = new InjectionToken<NgpAccordionConfig>(
  'NgpAccordionConfiguration',
);

export interface NgpAccordionConfig {
  /**
   * Determines whether multiple panels can be open simultaneously.
   * @default false
   */
  multiple: boolean;

  /**
   * The orientation of the accordion.
   * @default 'vertical'
   */
  orientation: 'horizontal' | 'vertical';
}

const defaultAccordionConfig: NgpAccordionConfig = {
  multiple: false,
  orientation: 'vertical',
};

/**
 * Provide the default accordion configuration
 * @param config The accordion configuration
 * @returns The provider
 */
export function provideAccordionConfig(config: Partial<NgpAccordionConfig>): Provider[] {
  return [
    {
      provide: NgpAccordionConfigToken,
      useValue: { ...defaultAccordionConfig, ...config },
    },
  ];
}

/**
 * Inject the accordion configuration
 * @returns The global accordion configuration
 */
export function injectAccordionConfig(): NgpAccordionConfig {
  return inject(NgpAccordionConfigToken, { optional: true }) ?? defaultAccordionConfig;
}
