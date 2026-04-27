import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';
import { SERVICES, MAILTO_URL } from '../../shared/constants';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services = SERVICES;
  mailtoUrl = MAILTO_URL;
  servicesCount = SERVICES.length;

  // SVG paths for service icons
  iconPaths: Record<string, string> = {
    'truck': 'M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M9 18h6M14 18a2 2 0 1 0 4 0M9 18a2 2 0 1 0-4 0M20 13V8a2 2 0 0 0-2-2h-2M14 6h6l2 4M18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    'pencil-ruler': 'M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13M15 6l2 2M9 3l2 2M8 21l2.5-2.5M20 11l-8 8-2 2H8v-2l2-2 8-8z',
    'wrench': 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
    'settings': 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    'recycle': 'M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12M11 19l1.77-3.067M9 15H7.1l.9-1.56M16.803 9.5l-1.77-3.07a1.8 1.8 0 0 0-1.56-.93h-.46M7.196 9.5L8.52 7.4M16.804 9.5h-6.28M12 5l-1.77 3.07',
  };

  getIconPath(icon: string): string {
    return this.iconPaths[icon] || '';
  }
}
