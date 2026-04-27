import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';
import { COMPARISON_ROWS } from '../../shared/constants';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './comparison.component.html',
})
export class ComparisonComponent {
  rows = COMPARISON_ROWS;

  isBoolean(val: any): boolean { return typeof val === 'boolean'; }
  isTrue(val: any): boolean { return val === true; }
}
