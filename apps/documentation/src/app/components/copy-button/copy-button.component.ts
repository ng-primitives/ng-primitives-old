import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroClipboard } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'docs-copy-button',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './copy-button.component.html',
  styleUrls: ['./copy-button.component.scss'],
  viewProviders: [provideIcons({ heroClipboard })],
})
export class CopyButtonComponent {
  @Input() code!: string;

  copyCount = 0;

  get copied(): boolean {
    return this.copyCount > 0;
  }

  async copy(): Promise<void> {
    await navigator.clipboard.writeText(this.code);
    this.copyCount++;

    setTimeout(() => (this.copyCount = 0), 1000);
  }
}
