import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';
import { MBBR_BLUEPRINT, TIERS, FEATURES } from '../../shared/constants';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './technology.component.html',
})
export class TechnologyComponent {
  mbbrBlueprint = MBBR_BLUEPRINT;
  tiers = TIERS;
  features = FEATURES;
}
