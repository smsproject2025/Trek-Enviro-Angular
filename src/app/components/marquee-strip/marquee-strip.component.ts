import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marquee-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee-strip.component.html',
})
export class MarqueeStripComponent {
  items = [
    'Namami Gange Aligned', 'Swachh Bharat Mission', 'MBBR Packaged STP',
    'Anaerobic + Aerobic', 'FRP Construction', 'Pan India Service',
    '30+ Years Plant Life', 'Strategic Partner — Susbio',
  ];
  get repeated() { return [...this.items, ...this.items]; }
}
