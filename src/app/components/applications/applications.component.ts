import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';
import { APPS } from '../../shared/constants';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './applications.component.html',
})
export class ApplicationsComponent {
  apps = APPS;

  iconPaths: Record<string, string> = {
    'home': 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8 M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
    'hotel': 'M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01',
    'hospital': 'M12 6v4M14 14h-4M14 18h-4M14 8h-4M18 12h.01M6 12h.01M3 2h18v20H3z',
    'factory': 'M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z M17 18h1M12 18h1M7 18h1',
    'building-2': 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2 M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2 M10 6h4M10 10h4M10 14h4M10 18h4',
  };

  getIconPath(icon: string): string {
    return this.iconPaths[icon] || '';
  }
}
