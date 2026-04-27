export const PHONE = '+91 96169 80885';
export const PHONE_DIGITS = '919616980885';
export const EMAIL = 'trekenviro@gmail.com';
export const WHATSAPP_URL = `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(
  "Hello Trek Enviro, I'd like to know more about your MBBR packaged STP solutions."
)}`;
export const MAILTO_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  'Inquiry: Trek Enviro MBBR Packaged STP'
)}&body=${encodeURIComponent(
  'Hello Trek Enviro Team,\n\nI\'d like a free site assessment for the following:\n- Capacity required (KLD):\n- Location:\n- Type of facility:\n- Current setup:\n\nPlease get in touch.\n\nThanks.'
)}`;

export const HERO_BG =
  'https://static.prod-images.emergentagent.com/jobs/8eb99253-c148-4ee2-b8d1-1599cb2b45d4/images/5a78d999a82c18a0f19427744a4dff90b994fcc337f693e725e0b38ec7a8116e.png';
export const WATER_REUSE =
  'https://static.prod-images.emergentagent.com/jobs/8eb99253-c148-4ee2-b8d1-1599cb2b45d4/images/902c917a1abd87823780418406a80d63671b10668232de38ca85344690163270.png';
export const MBBR_BLUEPRINT =
  'https://static.prod-images.emergentagent.com/jobs/8eb99253-c148-4ee2-b8d1-1599cb2b45d4/images/bf160ff2e209c39386c4f6e8eabb211a89a18db7f006333995bf33bf6be80342.png';
export const TREATMENT_AERIAL =
  'https://images.pexels.com/photos/35425759/pexels-photo-35425759.jpeg';
export const CONTROL_PANEL =
  'https://images.unsplash.com/photo-1773714331113-62dd29b492e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50JTIwZW5naW5lZXJpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzc3Mjc3NTQwfDA&ixlib=rb-4.1.0&q=85';
export const COMMERCIAL =
  'https://images.unsplash.com/photo-1775135999483-f0a1470a9e1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmUlMjBtb2Rlcm58ZW58MHx8fHwxNzc3Mjc3NTQwfDA&ixlib=rb-4.1.0&q=85';
export const INDUSTRIAL =
  'https://images.pexels.com/photos/35425761/pexels-photo-35425761.jpeg';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Applications', href: '#applications' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    icon: 'truck',
    title: 'Product Supply & Customization',
    body: 'Ready-to-install MBBR packaged STPs from 5 KLD to 50+ KLD — tailored to site, regulation and reuse requirements.',
  },
  {
    icon: 'pencil-ruler',
    title: 'Design & Engineering',
    body: 'Site survey, feasibility, hydraulic & treatability assessments, and full compliance support for NGT/CPCB/SPCB.',
  },
  {
    icon: 'wrench',
    title: 'Installation & Commissioning',
    body: 'Quick, hassle-free turnkey deployment by trained teams — minimal civil work, plants live in days, not months.',
  },
  {
    icon: 'settings',
    title: 'Operation & Maintenance',
    body: 'Comprehensive AMCs, periodic desludging, remote monitoring options and trained technicians for 30+ years uptime.',
  },
  {
    icon: 'recycle',
    title: 'Water Reuse & Resource Recovery',
    body: 'Integrated reuse systems for non-potable applications, plus sludge management and composting options.',
  },
];

export const TIERS = [
  {
    range: '5 – 10 KLD',
    label: 'Small Scale',
    body: 'Individual homes, villas, farmhouses, small restaurants, public toilets.',
  },
  {
    range: '15 – 50 KLD',
    label: 'Medium Scale',
    body: 'Apartments, schools, hostels, small hotels, office complexes.',
  },
  {
    range: '50+ KLD',
    label: 'Large Scale',
    body: 'Hospitals, commercial buildings, industrial clusters, townships (modular/hybrid).',
  },
];

export const FEATURES = [
  '100% FRP construction',
  'Up to 70% lower energy',
  'Compact footprint',
  'Automatic operation',
  'High BOD/COD removal',
  'Excellent nutrient removal',
];

export const PILLARS = [
  {
    icon: 'award',
    title: 'Proven Technology',
    body: 'Japanese expertise with thousands of installations worldwide and a growing footprint in India.',
  },
  {
    icon: 'indian-rupee',
    title: 'Cost-Effective',
    body: 'Lower CAPEX & OPEX with quick ROI through water reuse and reduced energy demand.',
  },
  {
    icon: 'sprout',
    title: 'Sustainable',
    body: 'Promotes a circular economy — reduces freshwater demand and pollution into rivers.',
  },
  {
    icon: 'shield-check',
    title: 'Reliable & Compliant',
    body: 'High treatment efficiency, government-recognized — supports Namami Gange & Swachh Bharat.',
  },
  {
    icon: 'zap',
    title: 'Local Expertise',
    body: 'Manufacturing and assembly in India with pan-India installation and service teams.',
  },
];

export const APPS = [
  {
    icon: 'home',
    title: 'Residential',
    body: 'Individual homes, gated societies, townships.',
    img: COMMERCIAL,
    colSpan: 'lg:col-span-5',
  },
  {
    icon: 'hotel',
    title: 'Commercial & Hospitality',
    body: 'Hotels, resorts, restaurants, malls.',
    img: TREATMENT_AERIAL,
    colSpan: 'lg:col-span-7',
  },
  {
    icon: 'hospital',
    title: 'Institutional',
    body: 'Schools, colleges, hospitals, government buildings.',
    img: INDUSTRIAL,
    colSpan: 'lg:col-span-4',
  },
  {
    icon: 'factory',
    title: 'Industrial',
    body: 'Light industries, food processing (with pre-treatment).',
    img: COMMERCIAL,
    colSpan: 'lg:col-span-4',
  },
  {
    icon: 'building-2',
    title: 'Rural & Urban',
    body: 'Villages, farmhouses and areas without centralized sewerage.',
    img: TREATMENT_AERIAL,
    colSpan: 'lg:col-span-4',
  },
];

export const COMPARISON_ROWS = [
  ['Footprint', 'Large', 'Medium-Large', 'Compact'],
  ['Energy use', 'Low (passive)', 'High', 'Up to 70% lower'],
  ['Effluent quality', 'Poor', 'Moderate', 'Excellent (CPCB/SPCB)'],
  ['Reuse-ready output', false, false, true],
  ['Operator required', false, true, 'Automatic'],
  ['Plant life', '10-15 yrs', '15-20 yrs', '30+ years'],
  ['CAPEX', 'Low', 'High', 'Moderate'],
  ['OPEX', 'Moderate', 'High', 'Low'],
];
