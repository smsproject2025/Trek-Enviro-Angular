import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';
import { PILLARS } from '../../shared/constants';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './why-choose-us.component.html',
})
export class WhyChooseUsComponent {
  pillars = PILLARS;

  iconPaths: Record<string, string> = {
    'award': 'M12 15 8.245 20l1.865-5.54L6 11h6.09L12 5l1.91 6H20l-4.11 3.46L17.755 20 12 15z',
    'indian-rupee': 'M6 3h12M6 8h12M15 21 6 12h3a4 4 0 0 0 0-8',
    'sprout': 'M7 20h10M10 20c5.5-2.5.8-6.4 3-10M9.5 9.4c1.1.8 1.8 2.2 2 3.6-.6 1-1.6 1.8-2.9 2.1M14.5 9.4c-1.1.8-1.8 2.2-2 3.6.6 1 1.6 1.8 2.9 2.1',
    'shield-check': 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z M9 12l2 2 4-4',
    'zap': 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
  };

  getIconPath(icon: string): string {
    return this.iconPaths[icon] || '';
  }
}
