import {
  Directive,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
  booleanAttribute,
  inject,
  numberAttribute,
} from '@angular/core';
import { Placement } from '@floating-ui/dom';
import { NgpOverlayTriggerDirective } from '@ng-primitives/ng-primitives/overlay';
import { injectTooltipConfig } from '../config/tooltip.config';
import { NgpTooltipTriggerToken } from './tooltip-trigger.token';

@Directive({
  selector: '[ngpTooltipTrigger]',
  standalone: true,
  host: {
    '[attr.aria-describedby]': 'tooltipId',
  },
  hostDirectives: [
    {
      directive: NgpOverlayTriggerDirective,
      inputs: [
        'ngpOverlayTrigger: ngpTooltipTrigger',
        'ngpOverlayDisabled: ngpTooltipDisabled',
        'ngpOverlayPlacement: ngpTooltipPlacement',
        'ngpOverlayOffset: ngpTooltipOffset',
        'ngpOverlayShowDelay: ngpTooltipShowDelay',
        'ngpOverlayHideDelay: ngpTooltipHideDelay',
        'ngpOverlayShift: ngpTooltipShift',
        'ngpOverlayFlip: ngpTooltipFlip',
        'ngpOverlayContainer: ngpTooltipContainer',
      ],
    },
  ],
})
export class NgpTooltipTriggerDirective implements OnInit {
  /**
   * Access the overlay trigger directive
   */
  private readonly overlayTrigger = inject(NgpOverlayTriggerDirective);

  /**
   * Access the global tooltip configuration
   */
  private readonly tooltipConfig = injectTooltipConfig();

  /**
   * Define the tooltip to display when the trigger is activated.
   */
  @Input({ alias: 'ngpTooltipTrigger', required: true }) templateRef!: TemplateRef<void>;

  /**
   * Define if the trigger should be disabled.
   * @default false
   */
  @Input({ alias: 'ngpTooltipDisabled', transform: booleanAttribute }) disabled: boolean = false;

  /**
   * Define the placement of the tooltip relative to the trigger.
   * @default 'bottom'
   */
  @Input('ngpTooltipPlacement') placement: Placement = this.tooltipConfig.placement;

  /**
   * Define the offset of the tooltip relative to the trigger.
   * @default 0
   */
  @Input({ alias: 'ngpTooltipOffset', transform: numberAttribute }) offset: number =
    this.tooltipConfig.offset;

  /**
   * Define the delay before the tooltip is displayed.
   * @default 0
   */
  @Input({ alias: 'ngpTooltipShowDelay', transform: numberAttribute }) showDelay: number =
    this.tooltipConfig.showDelay;

  /**
   * Define the delay before the tooltip is hidden.
   * @default 0
   */
  @Input({ alias: 'ngpTooltipHideDelay', transform: numberAttribute }) hideDelay: number =
    this.tooltipConfig.hideDelay;

  /**
   * Define whether the tooltip should flip when there is not enough space for the tooltip.
   * @default true
   */
  @Input({ alias: 'ngpTooltipFlip', transform: booleanAttribute }) flip: boolean =
    this.tooltipConfig.flip;

  /**
   * Define the container in to which the tooltip should be attached.
   * @default document.body
   */
  @Input('ngpTooltipContainer') container: HTMLElement = this.tooltipConfig.container;

  /**
   * The tooltip id.
   */
  protected tooltipId?: string;

  ngOnInit(): void {
    this.overlayTrigger.registerProvider({
      provide: NgpTooltipTriggerToken,
      useValue: this,
    });
  }

  /**
   * Show the tooltip.
   */
  @HostListener('mouseenter')
  @HostListener('focus')
  show(): void {
    this.overlayTrigger.show();
  }

  /**
   * Hide the tooltip.
   */
  @HostListener('mouseleave')
  @HostListener('blur')
  @HostListener('window:keydown.escape')
  hide(): void {
    this.overlayTrigger.hide();
  }

  /**
   * Define the tooltip id.
   * @param id The tooltip id
   * @internal
   */
  setTooltipId(id: string) {
    this.tooltipId = id;
  }
}
