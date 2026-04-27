# Trek Enviro — Angular Project

This is the Angular 18 conversion of the original React (CRA) Trek Enviro frontend.

## Tech Stack

| Layer | React (original) | Angular (converted) |
|---|---|---|
| Framework | React 18 + CRA | Angular 18 (standalone components) |
| Styling | Tailwind CSS | Tailwind CSS (identical classes) |
| Icons | lucide-react | Inline SVG (same icons) |
| Animations | IntersectionObserver hook | `RevealDirective` (same logic) |
| Routing | None (single-page) | Angular Router (empty routes) |
| State | `useState` | Component properties |
| Lifecycle | `useEffect` | `ngOnInit`, `@HostListener` |

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          ← Root component (replaces App.js)
│   ├── app.config.ts             ← Bootstrap config
│   ├── shared/
│   │   ├── constants.ts          ← All data/URL constants
│   │   └── reveal.directive.ts   ← Scroll-reveal IntersectionObserver
│   └── components/
│       ├── navbar/               ← Sticky navbar with mobile menu
│       ├── hero/                 ← Full-screen hero section
│       ├── marquee-strip/        ← Animated trust-strip
│       ├── about/                ← About section
│       ├── services/             ← Services grid
│       ├── technology/           ← MBBR technology + capacity tiers
│       ├── why-choose-us/        ← 5-pillar section
│       ├── applications/         ← Image-card grid
│       ├── comparison/           ← MBBR vs Septic comparison table
│       └── contact-footer/       ← Contact info + footer
├── styles.css                    ← All global + component CSS (App.css + index.css merged)
├── index.html
└── main.ts
```

## React → Angular Mapping

| React concept | Angular equivalent |
|---|---|
| `const Navbar = () => <JSX>` | `@Component` class + `.html` template |
| `useState(false)` | `open = false` class property |
| `useEffect(() => {...}, [])` | `ngOnInit()` / `@HostListener` |
| `useEffect` cleanup `return` | `ngOnDestroy()` |
| `props.value` | `@Input() value` |
| `onClick={handler}` | `(click)="handler()"` |
| `className={...}` | `[class]="..."` or `[ngClass]` |
| `{condition && <El />}` | `*ngIf="condition"` |
| `{items.map(...)}` | `*ngFor="let item of items"` |
| `style={{ animationDelay }}` | `[style.animation-delay]="..."` |
| Context / hooks | Services + DI |
| Custom hook `useReveal` | `RevealDirective` |

## Getting Started

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/trek-enviro-angular
```

## Notes

- All Tailwind classes are identical to the React version
- All `data-testid` attributes are preserved for compatibility
- Icons are inlined as SVG paths (no lucide-react dependency needed)
- `RevealDirective` replaces the `useReveal` custom hook — attach with `appReveal` attribute
- `styles.css` merges both `App.css` and `index.css` from the original project
