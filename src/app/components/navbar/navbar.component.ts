import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAV_LINKS, MAILTO_URL } from '../../shared/constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  open = false;
  scrolled = false;
  navLinks = NAV_LINKS;
  mailtoUrl = MAILTO_URL;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 24;
  }

  toggleMenu(): void {
    this.open = !this.open;
  }

  closeMenu(): void {
    this.open = false;
  }
}
