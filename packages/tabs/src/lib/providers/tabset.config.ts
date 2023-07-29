import { InjectionToken, Provider, inject } from '@angular/core';

export const NgpTabsetConfigToken = new InjectionToken<NgpTabsetConfig>('NgpTabsetConfiguration');

export interface NgpTabsetConfig {
  /**
   * The orientation of the tabset
   * @default 'horizontal'
   */
  orientation: 'horizontal' | 'vertical';

  /**
   * Whether tabs should activate on focus
   * @default true
   */
  activateOnFocus: boolean;

  /**
   * Whether focus should loop within the tab list when using the keyboard.
   * @default true
   */
  loop: boolean;
}

const defaultTabsetConfig: NgpTabsetConfig = {
  orientation: 'horizontal',
  activateOnFocus: true,
  loop: true,
};

/**
 * Provide the default tabset configuration
 * @param config The tabset configuration
 * @returns The provider
 */
export function provideTabsetConfig(config: Partial<NgpTabsetConfig>): Provider[] {
  return [
    {
      provide: NgpTabsetConfigToken,
      useValue: { ...defaultTabsetConfig, ...config },
    },
  ];
}

/**
 * Inject the tabset configuration
 * @returns The global tabset configuration
 */
export function injectTabsetConfig(): NgpTabsetConfig {
  return inject(NgpTabsetConfigToken, { optional: true }) ?? defaultTabsetConfig;
}
