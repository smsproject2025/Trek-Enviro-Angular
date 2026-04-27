import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';
import { WATER_REUSE, CONTROL_PANEL } from '../../shared/constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  waterReuse = WATER_REUSE;
  controlPanel = CONTROL_PANEL;
}
