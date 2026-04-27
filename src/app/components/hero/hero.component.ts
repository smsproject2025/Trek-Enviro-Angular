import { Component } from '@angular/core';
import { HERO_BG, MAILTO_URL, WHATSAPP_URL } from '../../shared/constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  heroBg = HERO_BG;
  mailtoUrl = MAILTO_URL;
  whatsappUrl = WHATSAPP_URL;

  stats = [
    { k: '30+', v: 'Years Plant Life' },
    { k: '70%', v: 'Lower Energy Use' },
    { k: '100%', v: 'FRP Construction' },
    { k: 'CPCB', v: '/ SPCB Compliant' },
  ];
}
