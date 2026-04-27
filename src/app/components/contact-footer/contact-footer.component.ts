import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';
import { PHONE, PHONE_DIGITS, EMAIL, MAILTO_URL, WHATSAPP_URL } from '../../shared/constants';

@Component({
  selector: 'app-contact-footer',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './contact-footer.component.html',
})
export class ContactFooterComponent {
  phone = PHONE;
  phoneDigits = PHONE_DIGITS;
  email = EMAIL;
  mailtoUrl = MAILTO_URL;
  whatsappUrl = WHATSAPP_URL;
  currentYear = new Date().getFullYear();
}
