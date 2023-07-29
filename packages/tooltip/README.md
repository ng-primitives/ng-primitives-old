# tooltip

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test tooltip` to execute the unit tests.

```html
<button [ngpTooltipTrigger]="informationTooltip">Hover me</button>

<div *ngpTooltip #informationTooltip>
  <div ngpTooltipArrow></div>
  <div ngpTooltipContent>Tooltip content</div>
</div>
```
