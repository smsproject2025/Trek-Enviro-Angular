import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { MarqueeStripComponent } from './components/marquee-strip/marquee-strip.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { ContactFooterComponent } from './components/contact-footer/contact-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    MarqueeStripComponent,
    AboutComponent,
    ServicesComponent,
    TechnologyComponent,
    WhyChooseUsComponent,
    ApplicationsComponent,
    ComparisonComponent,
    ContactFooterComponent,
  ],
  template: `
    <div class="font-body" data-testid="app-root">
      <app-navbar />
      <app-hero />
      <app-marquee-strip />
      <app-about />
      <app-services />
      <app-technology />
      <app-why-choose-us />
      <app-applications />
      <app-comparison />
      <app-contact-footer />
    </div>
  `,
})
export class AppComponent {}
