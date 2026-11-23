export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  startingPrice: string;
  priceUnit: string;
  summary: string;
  deliverables: string[];
  featured?: boolean;
  inquiryValue: string;
}

export interface PortfolioProject {
  id: string;
  index: string;
  title: string;
  category: string;
  filterKey: 'product' | 'fashion' | 'character' | 'video' | 'social';
  concept: string;
  deliverables: string[];
  creativeStyle: string;
  image: string;
  imageAlt: string;
  aspectClass: string;
  featured?: boolean;
}

export interface PackagePlan {
  id: string;
  name: string;
  price: string;
  cadence: string;
  audience: string;
  delivery: string;
  features: string[];
  highlighted?: boolean;
  inquiryService: string;
  inquiryBudget: string;
}

export interface MonthlyPlan {
  id: string;
  name: string;
  price: string;
  deliverablesSummary: string;
  features: string[];
  highlighted?: boolean;
  inquiryBudget: string;
}

export interface IndividualRate {
  service: string;
  startingPrice: string;
  notes: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface OperatingHour {
  day: string;
  hours: string;
  closed?: boolean;
}

export const CORE_VALUES: ValueItem[] = [
  {
    number: '01',
    title: 'Innovation',
    description: 'Constantly exploring new AI technologies and creative possibilities.',
  },
  {
    number: '02',
    title: 'Creativity',
    description: 'Turning ordinary concepts into extraordinary visual experiences.',
  },
  {
    number: '03',
    title: 'Quality',
    description: 'Delivering polished, professional, and visually compelling results.',
  },
  {
    number: '04',
    title: 'Efficiency',
    description: 'Making content production faster and more accessible.',
  },
  {
    number: '05',
    title: 'Collaboration',
    description: 'Working closely with clients to understand their vision.',
  },
  {
    number: '06',
    title: 'Excellence',
    description: 'Maintaining high creative standards in every project.',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Creative Innovation',
    description: 'We combine advanced AI technology with human creative direction.',
  },
  {
    title: 'Professional Quality',
    description: 'Every project receives attention to detail, visual consistency, and refinement.',
  },
  {
    title: 'Efficient Production',
    description: 'AI-assisted workflows help streamline the creative process.',
  },
  {
    title: 'Flexible Solutions',
    description: 'From individual content creators to established businesses, our services adapt to your needs.',
  },
  {
    title: 'Global Accessibility',
    description: 'Our remote creative studio works with clients across international markets.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'video-production',
    index: '01',
    title: 'AI-Generated Video Production',
    startingPrice: '$99',
    priceUnit: 'per project',
    summary:
      'Visually captivating AI-powered videos for brands, businesses, and digital creators without the overhead of traditional film shoots.',
    deliverables: [
      'Cinematic AI video production',
      'AI-generated storytelling videos',
      'Realistic AI video scenes & motion',
      'Promotional, commercial & short-form clips',
    ],
    featured: true,
    inquiryValue: 'AI Video Production',
  },
  {
    id: 'image-generation',
    index: '02',
    title: 'AI Image Generation',
    startingPrice: '$25',
    priceUnit: 'per project',
    summary:
      'Transform creative concepts into photorealistic commercial photography, editorial campaigns, and custom digital visuals.',
    deliverables: [
      'Photorealistic AI images & campaign art',
      'Commercial product & lifestyle photography',
      'Editorial visuals & concept illustrations',
      'Custom AI-generated environments',
    ],
    inquiryValue: 'AI Image Generation',
  },
  {
    id: 'advertisement-creation',
    index: '03',
    title: 'AI Advertisement Creation',
    startingPrice: '$149',
    priceUnit: 'per campaign',
    summary:
      'Attention-grabbing video and static advertisements engineered to communicate your brand message and convert audiences.',
    deliverables: [
      'AI-generated video advertisements',
      'Social media ad creatives & graphics',
      'Brand storytelling ad campaigns',
      'Commercial campaign concepts',
    ],
    inquiryValue: 'AI Advertisement Creation',
  },
  {
    id: 'character-creation',
    index: '04',
    title: 'AI Character Creation',
    startingPrice: '$79',
    priceUnit: 'per character',
    summary:
      'Distinctive digital personalities and consistent virtual brand ambassadors tailored for entertainment and marketing.',
    deliverables: [
      'Custom AI characters & virtual ambassadors',
      'Consistent multi-pose character design',
      'AI influencer concepts & portraits',
      'Character-based promotional assets',
    ],
    inquiryValue: 'AI Character Creation',
  },
  {
    id: 'product-promotional',
    index: '05',
    title: 'Product Promotional Videos',
    startingPrice: '$129',
    priceUnit: 'per video',
    summary:
      'Showcase physical and digital products through dramatic lighting, bespoke AI environments, and cinematic motion.',
    deliverables: [
      'Luxury product showcases & launches',
      'Cinematic product advertisements',
      'AI-generated product environments',
      'E-commerce & lifestyle product clips',
    ],
    featured: true,
    inquiryValue: 'Product Promotional Videos',
  },
  {
    id: 'social-media',
    index: '06',
    title: 'Social Media Content Creation',
    startingPrice: '$199',
    priceUnit: 'per month',
    summary:
      'Build a recognizable digital presence with platform-native reels, shorts, and visual campaign series.',
    deliverables: [
      'Instagram Reels, TikTok & YouTube Shorts',
      'Facebook & multi-channel ad graphics',
      'Consistent brand visual planning',
      'Recurring monthly content packages',
    ],
    inquiryValue: 'Social Media Content Creation',
  },
];

export const ADDITIONAL_CAPABILITIES = [
  'AI Logo Concepts & Brand Visuals',
  'YouTube Thumbnails',
  'Digital Campaign Design',
  'Creative Direction & Concept Development',
  'AI-Assisted Scriptwriting',
  'Visual Storytelling',
  'Custom AI Content Workflows',
];

export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'product', label: 'Product Campaigns' },
  { id: 'fashion', label: 'Fashion & Lifestyle' },
  { id: 'character', label: 'AI Characters' },
  { id: 'video', label: 'Commercial Video' },
  { id: 'social', label: 'Social Media' },
] as const;

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'luxury-product-campaign',
    index: '01',
    title: 'Luxury Product Campaign',
    category: 'AI Product Advertisement',
    filterKey: 'product',
    concept:
      'A premium fragrance bottle presented in a cinematic golden environment with dramatic lighting, elegant reflections, and luxurious visual details.',
    deliverables: [
      '5 promotional product images',
      '1 cinematic 20-second video',
      '3 social media advertising formats',
    ],
    creativeStyle: 'Luxury · Cinematic · Premium',
    image: 'src/assets/images/portfolio_future_fashion_1795415108085.jpg',
    imageAlt: 'Faceted dark amber and champagne-gold perfume bottle on basalt stone',
    aspectClass: 'aspect-[4/3]',
    featured: true,
  },
  {
    id: 'future-fashion',
    index: '02',
    title: 'Future Fashion',
    category: 'AI Fashion & Lifestyle',
    filterKey: 'fashion',
    concept:
      'A futuristic fashion campaign featuring AI-generated models, contemporary outfits, editorial lighting, and high-fashion environments.',
    deliverables: [
      '10 fashion campaign images',
      '2 promotional video clips',
      'Social media campaign visuals',
    ],
    creativeStyle: 'Editorial · Futuristic · High-Fashion',
    image: 'src/assets/images/portfolio_virtual_ambassador_1795415106439.jpg',
    imageAlt: 'High-fashion model in tailored charcoal and champagne-gold avant-garde outerwear',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'virtual-brand-ambassador',
    index: '03',
    title: 'Virtual Brand Ambassador',
    category: 'AI Character Creation',
    filterKey: 'character',
    concept:
      'A consistent virtual personality designed to represent a modern technology brand across digital marketing platforms.',
    deliverables: [
      'Custom character identity',
      'Multiple character expressions',
      'Lifestyle and professional portraits',
      'Promotional content concepts',
    ],
    creativeStyle: 'Photorealistic · Modern · Approachable',
    image: 'https://drive.google.com/file/d/1MGw4ggr---NqgMq8su9DywQMTNlMZnY0/preview?pli=1',
    imageAlt: 'Photorealistic studio portrait of a virtual brand ambassador in a dark blazer',
    aspectClass: 'aspect-square',
  },
  {
    id: 'smart-technology-ad',
    index: '04',
    title: 'Smart Technology Ad',
    category: 'AI Commercial Video',
    filterKey: 'video',
    concept:
      'A futuristic advertisement showcasing innovative technology products through cinematic environments, dynamic camera movements, and dramatic visual storytelling.',
    deliverables: [
      '30-second commercial concept',
      'Product-focused visuals',
      'Social media cutdowns',
    ],
    creativeStyle: 'Futuristic · Cinematic · Technology-Driven',
    image: 'https://drive.google.com/file/d/1hgIAu8EAHMZZFLifPwqYNoykzyIVj3KM/preview',
    imageAlt: 'Anodized black and brushed gold smart audio device floating with subtle cyan beam',
    aspectClass: 'aspect-video',
    featured: true,
  },
  {
    id: 'social-media-content-system',
    index: '05',
    title: 'Social Media Content System',
    category: 'Social Media Content Creation',
    filterKey: 'social',
    concept:
      'A complete visual content system for a lifestyle brand looking to establish a recognizable social media identity.',
    deliverables: [
      '12 social media graphics',
      '4 short-form videos',
      '1 consistent visual direction',
    ],
    creativeStyle: 'Minimalist · Engaging · Contemporary',
    image: 'https://drive.google.com/file/d/1onsvRaJC_ZfLMJa6RWradJgMBFiPzHCU/preview',
    imageAlt: 'Minimalist matte black vessels and brushed gold geometric props on dark stone',
    aspectClass: 'aspect-[4/3]',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We discuss your ideas, objectives, target audience, and creative requirements.',
  },
  {
    number: '02',
    title: 'Creative Planning',
    description: 'Our team develops the visual direction, concepts, references, and production strategy.',
  },
  {
    number: '03',
    title: 'AI Production',
    description: 'We use AI-powered creative tools and professional editing techniques to develop your content.',
  },
  {
    number: '04',
    title: 'Review & Refinement',
    description: 'You review the initial results and provide feedback for the included revision rounds.',
  },
  {
    number: '05',
    title: 'Final Delivery',
    description: 'Your approved content is delivered in high-quality digital formats, ready for your intended platforms.',
  },
];

export const PROJECT_PACKAGES: PackagePlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$149',
    cadence: '/ project',
    audience: 'Perfect for individuals, startups, and small businesses exploring AI-powered content.',
    delivery: '3–5 business days',
    features: [
      '5 AI-generated images',
      '1 short AI video (up to 15 seconds)',
      'Basic creative direction',
      '1 revision round',
      'Standard digital delivery',
    ],
    inquiryService: 'AI Video Production',
    inquiryBudget: '$149 – $349 (Starter / Custom)',
  },
  {
    id: 'creator',
    name: 'Creator',
    price: '$349',
    cadence: '/ project',
    audience: 'Designed for content creators and growing brands that need more engaging visual content.',
    delivery: '5–7 business days',
    features: [
      '10 AI-generated images',
      '2 AI-generated videos (up to 20s each)',
      '1 custom AI character concept',
      'Social media-ready formats',
      '2 revision rounds',
      'Priority production',
    ],
    inquiryService: 'Social Media Content Creation',
    inquiryBudget: '$349 – $699 (Creator)',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$699',
    cadence: '/ project',
    audience: 'A comprehensive creative solution for established businesses and marketing campaigns.',
    delivery: '7–12 business days',
    highlighted: true,
    features: [
      '20 AI-generated images',
      '3 premium AI promotional videos (up to 30s)',
      '2 AI character concepts',
      '2 advertising creative concepts',
      'Brand-aligned visual direction',
      '3 revision rounds & commercial license',
      'Priority support',
    ],
    inquiryService: 'AI Advertisement Creation',
    inquiryBudget: '$699 – $1,499 (Professional)',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$1,499+',
    cadence: '/ starting',
    audience: 'A tailored creative production solution for brands, agencies, and larger organizations.',
    delivery: 'Based on project scope',
    features: [
      'Custom AI content production',
      'Advanced video advertising & product campaigns',
      'AI brand ambassadors',
      'Large-scale visual asset creation',
      'Custom creative direction & dedicated PM',
      'Extended commercial licensing options',
    ],
    inquiryService: 'Custom AI Creative Campaign',
    inquiryBudget: '$1,500+ (Enterprise)',
  },
];

export const MONTHLY_PLANS: MonthlyPlan[] = [
  {
    id: 'basic-monthly',
    name: 'Basic',
    price: '$299',
    deliverablesSummary: '8 images + 2 short videos',
    features: [
      '8 custom AI-generated images per month',
      '2 short-form AI videos per month',
      'Content planning & consistent branding',
      'Platform-ready aspect ratios',
    ],
    inquiryBudget: '$299/mo (Basic Subscription)',
  },
  {
    id: 'growth-monthly',
    name: 'Growth',
    price: '$599',
    deliverablesSummary: '15 images + 5 short videos',
    highlighted: true,
    features: [
      '15 custom AI-generated images per month',
      '5 short-form AI videos per month',
      'Dedicated monthly creative calendar',
      'Consistent visual identity across channels',
    ],
    inquiryBudget: '$599/mo (Growth Subscription)',
  },
  {
    id: 'premium-monthly',
    name: 'Premium',
    price: '$999',
    deliverablesSummary: '25 images + 10 short videos',
    features: [
      '25 custom AI-generated images per month',
      '10 short-form AI videos per month',
      'Full campaign art direction & priority turnaround',
      'Usage rights defined in subscription agreement',
    ],
    inquiryBudget: '$999/mo (Premium Subscription)',
  },
];

export const INDIVIDUAL_RATES: IndividualRate[] = [
  { service: 'AI Image Generation', startingPrice: '$25', notes: 'Per project · Photorealistic or editorial' },
  { service: 'AI Product Photography', startingPrice: '$49', notes: 'Bespoke studio scenes & lighting' },
  { service: 'AI Character Creation', startingPrice: '$79', notes: 'Per character · Identity & variations' },
  { service: 'AI Video Production', startingPrice: '$99', notes: 'Per project · Cinematic scenes & motion' },
  { service: 'AI Product Promotional Video', startingPrice: '$129', notes: 'Per video · Commercial product storytelling' },
  { service: 'AI Advertisement Creation', startingPrice: '$149', notes: 'Per campaign · Multi-format ad creatives' },
  { service: 'Social Media Content Package', startingPrice: '$199/mo', notes: 'Reels, TikTok, Shorts & graphics' },
  { service: 'Custom AI Creative Campaign', startingPrice: 'Custom Quote', notes: 'Tailored scope & licensing' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'Small Business Owner',
    quote:
      'AIMADEIT transformed our product ideas into beautiful advertising visuals. The creative quality exceeded our expectations, and the entire process was smooth and professional.',
  },
  {
    id: 'daniel-carter',
    name: 'Daniel Carter',
    role: 'Digital Marketing Consultant',
    quote:
      'The AI promotional videos gave our campaigns a completely new visual direction. I especially appreciated the creativity, communication, and attention to detail.',
  },
  {
    id: 'emily-rodriguez',
    name: 'Emily Rodriguez',
    role: 'Content Creator',
    quote:
      'I needed fresh content for my social media platforms, and AIMADEIT delivered exactly what I was looking for. The visuals were modern, engaging, and professionally produced.',
  },
  {
    id: 'michael-anderson',
    name: 'Michael Anderson',
    role: 'E-commerce Entrepreneur',
    quote:
      'The product promotional videos helped us present our products in a more premium and visually appealing way. Highly recommended for businesses looking for creative content solutions.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What types of businesses do you work with?',
    answer:
      'We work with startups, entrepreneurs, e-commerce brands, marketing agencies, content creators, and established businesses.',
  },
  {
    id: 'faq-2',
    question: 'Do you create custom AI-generated content?',
    answer:
      'Yes. Our projects are developed according to each client’s creative brief, visual preferences, and business objectives.',
  },
  {
    id: 'faq-3',
    question: 'Can I request revisions?',
    answer:
      'Yes. Each package includes a specified number of revision rounds. Additional revisions may incur extra charges ($25–$75 depending on complexity).',
  },
  {
    id: 'faq-4',
    question: 'How long does production take?',
    answer:
      'Production generally takes between 3 and 12 business days, depending on project complexity and package selection. Express delivery is available for an additional 25%–50% fee.',
  },
  {
    id: 'faq-5',
    question: 'Do you offer commercial usage rights?',
    answer:
      'Commercial licensing is available according to the selected package and individual project agreement. Rights and restrictions are confirmed before production.',
  },
  {
    id: 'faq-6',
    question: 'Can you create content for Instagram, TikTok, and YouTube?',
    answer:
      'Absolutely. We create content in formats suitable for different social media platforms, including Instagram Reels, TikTok videos, YouTube Shorts, and Facebook campaigns.',
  },
  {
    id: 'faq-7',
    question: 'Do I need to provide my own images or videos?',
    answer:
      'Not necessarily. We can develop creative concepts from written descriptions, references, or existing brand materials.',
  },
  {
    id: 'faq-8',
    question: 'Do you accept international clients?',
    answer:
      'Yes. AIMADEIT operates remotely as an online worldwide creative studio and is designed to serve clients across international markets.',
  },
];

export const OPERATING_HOURS: OperatingHour[] = [
  { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM ET' },
  { day: 'Saturday', hours: '10:00 AM – 2:00 PM ET' },
  { day: 'Sunday', hours: 'Closed', closed: true },
];

export const CONTACT_EMAILS = [
  { label: 'General Inquiries', email: 'aimadeit@gmail.com' },
  { label: 'Project Inquiries', email: 'projects@aimadeit.example' },
  { label: 'Business Partnerships', email: 'partnerships@aimadeit.example' },
  { label: 'Customer Support', email: 'support@aimadeit.example' },
];

export const SOCIAL_HANDLES = [
  { platform: 'Instagram', handle: '@aimadeit.creative' },
  { platform: 'TikTok', handle: '@aimadeit.creative' },
  { platform: 'YouTube', handle: '@aimadeitcreativelab' },
  { platform: 'Facebook', handle: 'AIMADEIT AI Creative Lab' },
  { platform: 'LinkedIn', handle: 'AIMADEIT Creative Lab' },
];

export const SERVICE_OPTIONS = [
  'AI Video Production',
  'AI Image Generation',
  'AI Advertisement Creation',
  'AI Character Creation',
  'Product Promotional Videos',
  'Social Media Content Creation',
  'Custom AI Creative Campaign',
];

export const BUDGET_OPTIONS = [
  'Under $150 (Single Image / Micro Project)',
  '$149 – $349 (Starter / Custom)',
  '$349 – $699 (Creator)',
  '$699 – $1,499 (Professional)',
  '$1,500+ (Enterprise)',
  '$299/mo (Basic Subscription)',
  '$599/mo (Growth Subscription)',
  '$999/mo (Premium Subscription)',
];

export const POLICY_CONTENT: Record<'privacy' | 'terms' | 'refund', { title: string; body: string[] }> = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'AIMADEIT AI Creative Lab respects client confidentiality and collects only the project details, contact information, and creative references voluntarily submitted through our inquiry forms.',
      'Submitted materials and reference assets are used strictly to scope, produce, and deliver requested creative projects. We do not sell or distribute client data to third parties.',
      'This website uses demonstration contact domains (.example) and sample portfolio entries to illustrate agency capabilities.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    body: [
      'All creative engagements begin with a defined project brief, deliverable schedule, and confirmed commercial usage agreement prior to production.',
      'Standard payment terms are 50% deposit prior to production and 50% upon final asset approval. Monthly subscription plans are billed in advance.',
      'Included revision rounds vary by selected package (1 to 3 rounds). Additional revisions or express turnaround requests are scoped transparently before work proceeds.',
    ],
  },
  refund: {
    title: 'Refund Policy',
    body: [
      'Because AI creative direction and custom visual production involve dedicated studio hours upon commencement, initial project deposits become non-refundable once Step 2 (Creative Planning) begins.',
      'If a project is cancelled prior to creative planning kickoff, deposits are refunded in full. Monthly subscriptions may be paused or cancelled prior to the next billing cycle.',
    ],
  },
};

export interface CompletedProject {
  id: string;
  index: string;
  title: string;
  client: string;
  year: '2026' | '2025' | '2024';
  category: string;
  filterKey: 'product' | 'fashion' | 'character' | 'video' | 'social';
  mediaType: 'image' | 'video';
  concept: string;
  deliverables: string[];
  creativeStyle: string;
  image: string;
  embedUrl?: string;
}

export const COMPLETED_PROJECTS: CompletedProject[] = [
  {
    id: 'cp-01',
    index: '01',
    title: 'Aurelia Elixir Luxury Fragrance',
    client: 'Maison Aurelia',
    year: '2026',
    category: 'AI Product Advertisement',
    filterKey: 'product',
    mediaType: 'image',
    concept:
      'Faceted amber fragrance campaign staged on obsidian basalt with liquid gold caustics and editorial rim lighting.',
    deliverables: ['6 campaign stills', '15s hero motion loop', '3 paid social formats'],
    creativeStyle: 'Luxury · Editorial · Basalt',
    image: '/src/assets/images/portfolio_luxury_fragrance_1795415107843.jpg',
  },
  {
    id: 'cp-02',
    index: '02',
    title: 'Neo-Couture Autumn Lookbook',
    client: 'Vespera Atelier',
    year: '2026',
    category: 'AI Fashion & Lifestyle',
    filterKey: 'fashion',
    mediaType: 'image',
    concept:
      'Avant-garde tailored charcoal and champagne-gold outerwear showcased in architectural brutalist daylight.',
    deliverables: ['12 lookbook plates', '2 runway teasers', 'Instagram carousel kit'],
    creativeStyle: 'High-Fashion · Futuristic · Minimal',
    image: '/src/assets/images/portfolio_future_fashion_1795415108085.jpg',
  },
  {
    id: 'cp-03',
    index: '03',
    title: 'Kaelen — Virtual Brand Ambassador',
    client: 'NexaCore Tech',
    year: '2026',
    category: 'AI Character Creation',
    filterKey: 'character',
    mediaType: 'video',
    concept:
      'Consistent photorealistic digital spokesperson built for quarterly product keynotes, onboarding reels, and press visuals.',
    deliverables: ['Master character sheet', '16 pose & expression presets', '30s intro reel'],
    creativeStyle: 'Photorealistic · Approachable · Modern',
    image: '/src/assets/images/portfolio_virtual_ambassador_1795415106439.jpg',
    embedUrl: 'https://drive.google.com/file/d/1MGw4ggr---NqgMq8su9DywQMTNlMZnY0/preview?pli=1',
  },
  {
    id: 'cp-04',
    index: '04',
    title: 'PulseOne Spatial Audio Launch',
    client: 'PulseOne Acoustics',
    year: '2026',
    category: 'AI Commercial Video',
    filterKey: 'video',
    mediaType: 'video',
    concept:
      'Anodized matte black smart speaker suspended in zero-gravity with kinetic cyan soundwave particles.',
    deliverables: ['30s launch commercial', '3 vertical cutdowns', '8 hero product stills'],
    creativeStyle: 'Sci-Fi · Kinetic · Precision',
    image: '/src/assets/images/portfolio_smart_tech_1795415107499.jpg',
    embedUrl: 'https://drive.google.com/file/d/1hgIAu8EAHMZZFLifPwqYNoykzyIVj3KM/preview',
  },
  {
    id: 'cp-05',
    index: '05',
    title: 'Monolith Skincare Social Grid',
    client: 'Kora Botanics',
    year: '2026',
    category: 'Social Media Content Creation',
    filterKey: 'social',
    mediaType: 'video',
    concept:
      'Cohesive matte-black ceramic vessel system across 16 social templates and short-form vertical loops.',
    deliverables: ['16 feed & story visuals', '4 vertical Reels', 'Brand moodboard guide'],
    creativeStyle: 'Minimalist · Tactile · Contemporary',
    image: '/src/assets/images/portfolio_social_system_1795415108517.jpg',
    embedUrl: 'https://drive.google.com/file/d/1onsvRaJC_ZfLMJa6RWradJgMBFiPzHCU/preview',
  },
  {
    id: 'cp-06',
    index: '06',
    title: 'Obsidian Monolith Brand Film',
    client: 'AIMADEIT Studio',
    year: '2026',
    category: 'AI Commercial Video',
    filterKey: 'video',
    mediaType: 'video',
    concept:
      'Atmospheric studio opener blending sculptural brushed brass geometry with volumetric cinema haze.',
    deliverables: ['45s studio manifesto film', '10 keyframe stills', 'Web hero loop'],
    creativeStyle: 'Architectural · Gold · Atmospheric',
    image: '/src/assets/images/hero_creative_lab_1795415107588.jpg',
  },
  {
    id: 'cp-07',
    index: '07',
    title: 'Chronos Titanium Watch Campaign',
    client: 'Horology Lab',
    year: '2026',
    category: 'AI Product Advertisement',
    filterKey: 'product',
    mediaType: 'image',
    concept:
      'Macro precision watch renders surrounded by warm tungsten reflections and dark slate surfaces.',
    deliverables: ['8 macro renders', '2 e-commerce banners', 'Print billboard master'],
    creativeStyle: 'Precision · Luxury · Macro',
    image: '/src/assets/images/portfolio_luxury_fragrance_1795415107843.jpg',
  },
  {
    id: 'cp-08',
    index: '08',
    title: 'Solstice Resort Capsule',
    client: 'Aether Apparel',
    year: '2026',
    category: 'AI Fashion & Lifestyle',
    filterKey: 'fashion',
    mediaType: 'image',
    concept:
      'Golden-hour desert editorial featuring AI fashion models in flowing linen and metallic trims.',
    deliverables: ['14 editorial stills', '4 story teasers', 'Lookbook PDF assets'],
    creativeStyle: 'Warm · Editorial · Coastal',
    image: '/src/assets/images/portfolio_future_fashion_1795415108085.jpg',
  },
  {
    id: 'cp-09',
    index: '09',
    title: 'Aria — AI Gaming Stream Host',
    client: 'Vortex Interactive',
    year: '2026',
    category: 'AI Character Creation',
    filterKey: 'character',
    mediaType: 'image',
    concept:
      'Stylized cyber-editorial virtual host designed for tournament broadcasts and YouTube thumbnails.',
    deliverables: ['10 thumbnail expressions', '3 avatar angles', 'Stream overlay pack'],
    creativeStyle: 'Cyber · Expressive · Crisp',
    image: '/src/assets/images/portfolio_virtual_ambassador_1795415106439.jpg',
  },
  {
    id: 'cp-10',
    index: '10',
    title: 'AeroPods Pro Commercial Spot',
    client: 'SoundCraft Audio',
    year: '2026',
    category: 'AI Commercial Video',
    filterKey: 'video',
    mediaType: 'video',
    concept:
      'High-contrast product reveal showcasing acoustic engineering in a dark obsidian chamber.',
    deliverables: ['20s hero spot', '9:16 TikTok ad', '5 still frame exports'],
    creativeStyle: 'Sleek · Dynamic · Tech',
    image: '/src/assets/images/portfolio_smart_tech_1795415107499.jpg',
  },
  {
    id: 'cp-11',
    index: '11',
    title: 'Velvet Roast Coffee Reels Pack',
    client: 'Noir Roasters',
    year: '2026',
    category: 'Social Media Content Creation',
    filterKey: 'social',
    mediaType: 'video',
    concept:
      'Monthly visual content engine pairing moody espresso pours with minimalist typography cards.',
    deliverables: ['12 Instagram posts', '6 Reels motion clips', 'Story highlight covers'],
    creativeStyle: 'Moody · Artisanal · Bold',
    image: '/src/assets/images/portfolio_social_system_1795415108517.jpg',
  },
  {
    id: 'cp-12',
    index: '12',
    title: 'Lumiere Serum Launch Visuals',
    client: 'DermaGlow Labs',
    year: '2026',
    category: 'AI Product Advertisement',
    filterKey: 'product',
    mediaType: 'image',
    concept:
      'Translucent glass dropper bottles framed by golden droplets and soft studio refraction.',
    deliverables: ['7 product stills', 'Amazon A+ visual set', 'Hero banner'],
    creativeStyle: 'Refined · Luminous · Clean',
    image: '/src/assets/images/portfolio_luxury_fragrance_1795415107843.jpg',
  },
  {
    id: 'cp-13',
    index: '13',
    title: 'Urban Techwear Street Series',
    client: 'Kinetix Wear',
    year: '2025',
    category: 'AI Fashion & Lifestyle',
    filterKey: 'fashion',
    mediaType: 'image',
    concept:
      'Rain-slicked nocturnal city backdrops highlighting waterproof silhouettes and reflective seams.',
    deliverables: ['10 campaign portraits', '2 carousel ad sets', 'Lookbook cover'],
    creativeStyle: 'Nocturnal · Streetwear · Sharp',
    image: '/src/assets/images/portfolio_future_fashion_1795415108085.jpg',
  },
  {
    id: 'cp-14',
    index: '14',
    title: 'Dr. Nova — EdTech AI Tutor Persona',
    client: 'BrightMind Academy',
    year: '2025',
    category: 'AI Character Creation',
    filterKey: 'character',
    mediaType: 'image',
    concept:
      'Warm, trustworthy virtual educator character integrated across course modules and promo ads.',
    deliverables: ['12 teaching poses', 'Course banner pack', '2 intro animations'],
    creativeStyle: 'Friendly · Editorial · Clear',
    image: '/src/assets/images/portfolio_virtual_ambassador_1795415106439.jpg',
  },
  {
    id: 'cp-15',
    index: '15',
    title: 'Vertex EV Dashboard Showcase',
    client: 'Vertex Mobility',
    year: '2025',
    category: 'AI Commercial Video',
    filterKey: 'video',
    mediaType: 'video',
    concept:
      'Futuristic cockpit visualization demonstrating voice-assisted navigation and HUD telemetry.',
    deliverables: ['30s keynote video', '4 feature micro-clips', 'Press kit renders'],
    creativeStyle: 'Automotive · Futuristic · Clean',
    image: '/src/assets/images/portfolio_smart_tech_1795415107499.jpg',
  },
  {
    id: 'cp-16',
    index: '16',
    title: 'Atelier Home Decor Monthly Kit',
    client: 'Forma Living',
    year: '2025',
    category: 'Social Media Content Creation',
    filterKey: 'social',
    mediaType: 'image',
    concept:
      'Sculptural ceramic and travertine product styling engineered for Pinterest and Instagram growth.',
    deliverables: ['20 Pinterest pins', '10 IG carousel slides', 'Seasonal palette guide'],
    creativeStyle: 'Sculptural · Warm · Minimal',
    image: '/src/assets/images/portfolio_social_system_1795415108517.jpg',
  },
  {
    id: 'cp-17',
    index: '17',
    title: 'Onyx Whiskey Reserve Campaign',
    client: 'Highland Craft Spirits',
    year: '2025',
    category: 'AI Product Advertisement',
    filterKey: 'product',
    mediaType: 'image',
    concept:
      'Smoked oak and molten amber studio compositions celebrating small-batch barrel heritage.',
    deliverables: ['6 bottle hero shots', '3 social ad crops', 'Packaging mockup'],
    creativeStyle: 'Heritage · Amber · Dramatic',
    image: '/src/assets/images/portfolio_luxury_fragrance_1795415107843.jpg',
  },
  {
    id: 'cp-18',
    index: '18',
    title: 'Midnight Silk Evening Collection',
    client: 'Sora Couture',
    year: '2025',
    category: 'AI Fashion & Lifestyle',
    filterKey: 'fashion',
    mediaType: 'video',
    concept:
      'Slow-motion fabric drape study paired with dramatic chiaroscuro studio illumination.',
    deliverables: ['15s teaser film', '8 editorial frames', 'VIP invite visual'],
    creativeStyle: 'Chiaroscuro · Silk · Opulent',
    image: '/src/assets/images/portfolio_future_fashion_1795415108085.jpg',
  },
  {
    id: 'cp-19',
    index: '19',
    title: 'Zane — Fintech Product Concierge',
    client: 'LedgerFlow',
    year: '2025',
    category: 'AI Character Creation',
    filterKey: 'character',
    mediaType: 'image',
    concept:
      'Polished business-casual digital representative for landing pages and explainer decks.',
    deliverables: ['8 portrait variations', 'Landing page hero cutouts', 'Avatar suite'],
    creativeStyle: 'Corporate · Trustworthy · Crisp',
    image: '/src/assets/images/portfolio_virtual_ambassador_1795415106439.jpg',
  },
  {
    id: 'cp-20',
    index: '20',
    title: 'Hyperion Smart Ring Film',
    client: 'Hyperion Health',
    year: '2025',
    category: 'AI Commercial Video',
    filterKey: 'video',
    mediaType: 'video',
    concept:
      'Titanium wearable ring orbiting a dark horizon with subtle biometric glow trails.',
    deliverables: ['25s product reveal', '3 Meta ad variants', '6 macro stills'],
    creativeStyle: 'Wearable · Minimal · Glowing',
    image: '/src/assets/images/portfolio_smart_tech_1795415107499.jpg',
  },
  {
    id: 'cp-21',
    index: '21',
    title: 'Kinetix Fitness TikTok Engine',
    client: 'Kinetix Club',
    year: '2025',
    category: 'Social Media Content Creation',
    filterKey: 'social',
    mediaType: 'video',
    concept:
      'High-energy vertical motion graphics and AI workout environment vignettes for daily posting.',
    deliverables: ['10 TikTok loops', '15 graphic quote cards', 'Creator thumbnail kit'],
    creativeStyle: 'Energetic · High-Contrast · Urban',
    image: '/src/assets/images/portfolio_social_system_1795415108517.jpg',
  },
  {
    id: 'cp-22',
    index: '22',
    title: 'Saffron & Cedar Candle Line',
    client: 'Loom Home',
    year: '2025',
    category: 'AI Product Advertisement',
    filterKey: 'product',
    mediaType: 'image',
    concept:
      'Warm candlelight studio scenes on dark travertine with botanical shadow play.',
    deliverables: ['9 e-commerce photos', '4 seasonal banners', 'Email header art'],
    creativeStyle: 'Intimate · Warm · Organic',
    image: '/src/assets/images/portfolio_luxury_fragrance_1795415107843.jpg',
  },
  {
    id: 'cp-23',
    index: '23',
    title: 'Prism Eyewear Editorial',
    client: 'Optica Studio',
    year: '2025',
    category: 'AI Fashion & Lifestyle',
    filterKey: 'fashion',
    mediaType: 'image',
    concept:
      'Architectural acetate frames photographed with crisp cyan and amber studio gels.',
    deliverables: ['10 close-up portraits', '3 campaign posters', 'Story ad set'],
    creativeStyle: 'Editorial · Geometric · Bold',
    image: '/src/assets/images/portfolio_future_fashion_1795415108085.jpg',
  },
  {
    id: 'cp-24',
    index: '24',
    title: 'Mina — K-Beauty Virtual Muse',
    client: 'Hana Glow',
    year: '2025',
    category: 'AI Character Creation',
    filterKey: 'character',
    mediaType: 'image',
    concept:
      'Dewy-skin beauty brand muse created for seasonal skincare launches and banner ads.',
    deliverables: ['12 beauty close-ups', '4 seasonal skin looks', 'Social sticker pack'],
    creativeStyle: 'Luminous · Beauty · Soft',
    image: '/src/assets/images/portfolio_virtual_ambassador_1795415106439.jpg',
  },
  {
    id: 'cp-25',
    index: '25',
    title: 'Nebula Cloud SaaS Brand Reel',
    client: 'NebulaOps',
    year: '2024',
    category: 'AI Commercial Video',
    filterKey: 'video',
    mediaType: 'video',
    concept:
      'Abstract glassmorphic data nodes morphing into a unified command monolith.',
    deliverables: ['30s homepage reel', 'LinkedIn promo cut', '5 abstract backgrounds'],
    creativeStyle: 'Abstract · B2B · Polished',
    image: '/src/assets/images/hero_creative_lab_1795415107588.jpg',
  },
  {
    id: 'cp-26',
    index: '26',
    title: 'Solace Tea Packaging & Socials',
    client: 'Solace Botanicals',
    year: '2024',
    category: 'Social Media Content Creation',
    filterKey: 'social',
    mediaType: 'image',
    concept:
      'Calm morning light compositions highlighting matte tins and botanical infusions.',
    deliverables: ['14 IG feed posts', '6 story templates', 'Launch countdown visuals'],
    creativeStyle: 'Serene · Botanical · Tactile',
    image: '/src/assets/images/portfolio_social_system_1795415108517.jpg',
  },
  {
    id: 'cp-27',
    index: '27',
    title: 'Titan Mechanical Keyboard Ad',
    client: 'KeyForge',
    year: '2024',
    category: 'AI Product Advertisement',
    filterKey: 'product',
    mediaType: 'image',
    concept:
      'Exploded switch renders and dramatic desk setups tailored for hardware enthusiasts.',
    deliverables: ['8 product renders', 'YouTube thumbnail pack', '2 launch banners'],
    creativeStyle: 'Hardware · Precision · Dark',
    image: '/src/assets/images/portfolio_smart_tech_1795415107499.jpg',
  },
  {
    id: 'cp-28',
    index: '28',
    title: 'Alpine Performance Outerwear',
    client: 'NordPeak Gear',
    year: '2024',
    category: 'AI Fashion & Lifestyle',
    filterKey: 'fashion',
    mediaType: 'image',
    concept:
      'High-altitude glacier environments showcasing insulated technical shells.',
    deliverables: ['10 outdoor hero shots', 'Retail poster kit', '3 ad variants'],
    creativeStyle: 'Rugged · Crisp · Cinematic',
    image: '/src/assets/images/portfolio_future_fashion_1795415108085.jpg',
  },
  {
    id: 'cp-29',
    index: '29',
    title: 'Atlas — Podcast Host Avatar',
    client: 'FutureCast Media',
    year: '2024',
    category: 'AI Character Creation',
    filterKey: 'character',
    mediaType: 'image',
    concept:
      'Consistent editorial studio host identity used across 50+ episode covers and clips.',
    deliverables: ['15 episode cover templates', 'Host studio portraits', 'Channel banner'],
    creativeStyle: 'Studio · Podcast · Signature',
    image: '/src/assets/images/portfolio_virtual_ambassador_1795415106439.jpg',
  },
  {
    id: 'cp-30',
    index: '30',
    title: 'Zenith Drone Cinematic Teaser',
    client: 'Skyline Robotics',
    year: '2024',
    category: 'AI Commercial Video',
    filterKey: 'video',
    mediaType: 'video',
    concept:
      'High-altitude canyon flythrough sequences demonstrating autonomous tracking optics.',
    deliverables: ['20s teaser video', '5 storyboard frames', 'Trade show loop'],
    creativeStyle: 'Aerial · Epic · High-Tech',
    image: '/src/assets/images/portfolio_smart_tech_1795415107499.jpg',
  },
  {
    id: 'cp-31',
    index: '31',
    title: 'Vibe Studio Creator Growth Pack',
    client: 'Vibe Collective',
    year: '2024',
    category: 'Social Media Content Creation',
    filterKey: 'social',
    mediaType: 'image',
    concept:
      'High-retention YouTube thumbnail templates and carousel systems for weekly creators.',
    deliverables: ['18 thumbnail concepts', '8 IG carousels', 'Color grading presets'],
    creativeStyle: 'High-CTR · Vibrant · Crisp',
    image: '/src/assets/images/hero_creative_lab_1795415107588.jpg',
  },
  {
    id: 'cp-32',
    index: '32',
    title: 'Mirage Jewelry Collection',
    client: 'Atelier Mirage',
    year: '2024',
    category: 'AI Product Advertisement',
    filterKey: 'product',
    mediaType: 'image',
    concept:
      'Sculptural 18k gold rings illuminated over black velvet and warm specular highlights.',
    deliverables: ['10 macro jewelry stills', '2 reel teasers', 'Boutique lookbook'],
    creativeStyle: 'Gold · Sculptural · Timeless',
    image: '/src/assets/images/portfolio_luxury_fragrance_1795415107843.jpg',
  },
];

