# PRO & Government Relations Agency Website

A modern, professional website for a Public Relations Officer (PRO) and Government Relations agency serving businesses in the United Arab Emirates.

## 🌟 Features

- **Modern Blue & White Design**: Clean gradient theme with professional aesthetics
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion for elegant scroll reveals and transitions
- **Floating Navbar**: Glassmorphism sticky navigation with scroll effects
- **Animated Counters**: Dynamic statistics that count up on page load
- **Auto-Scrolling Testimonials**: Infinite loop testimonials with profile pictures
- **Service Showcase**: Premium cards with hover effects and background images
- **Dynamic Service Pages**: Detailed information for each service category
- **Contact Forms**: Validated forms using React Hook Form and Zod
- **SEO Optimized**: Metadata configuration for all pages

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 📋 Services Covered

1. **Company Setup** - Business formation and registration in UAE
2. **Visa & Immigration** - Work permits, residence visas, and immigration services
3. **Labor Compliance** - Ministry of Labour compliance and regulations
4. **Document Services** - Attestation, translation, and certification
5. **HR Services** - Employee lifecycle and HR management
6. **Business Consulting** - Strategic business advisory services

### Coming Soon
- Tax Consultation
- Legal Advisory
- Accounting Services
- Real Estate Services

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd pro-agency
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
pro-agency/
├── app/
│   ├── api/
│   │   └── contact/              # Contact form API endpoint
│   ├── services/
│   │   ├── [id]/                 # Dynamic service detail pages
│   │   ├── company-setup/        # Company setup service page
│   │   ├── visa-immigration/     # Visa & immigration service page
│   │   ├── labor-compliance/     # Labor compliance service page
│   │   ├── document-services/    # Document services page
│   │   ├── hr-services/          # HR services page
│   │   ├── business-consulting/  # Business consulting page
│   │   └── page.tsx              # Services directory
│   ├── about/                    # About page
│   ├── contact/                  # Contact page with forms
│   ├── industries/               # Industries page
│   ├── resources/                # Resources page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── not-found.tsx             # 404 page
│   └── globals.css               # Global styles
├── components/
│   ├── Navbar.tsx                # Floating glassmorphism navbar
│   ├── Footer.tsx                # Footer component
│   └── Logo.tsx                  # Logo component
├── lib/
│   ├── services.ts               # Service data and types
│   ├── images.ts                 # Image paths configuration
│   ├── branding.ts               # Brand colors and theme
│   └── validations.ts            # Zod validation schemas
├── public/                       # Static assets
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🎨 Customization

### Colors

The website uses a blue and white gradient theme. Edit `lib/branding.ts` to customize:

```typescript
export const brandColors = {
  primary: '#3B82F6',    // Blue
  secondary: '#60A5FA',  // Light Blue
  accent: '#93C5FD',     // Lighter Blue
  gold: '#FCD34D',       // Gold accent
};
```

### Services

Add or modify services in `lib/services.ts`:

```typescript
export const services: Service[] = [
  {
    id: 'service-id',
    title: 'Service Name',
    description: 'Service description',
    icon: IconComponent,
    features: ['Feature 1', 'Feature 2'],
    details: {
      overview: 'Detailed overview',
      benefits: ['Benefit 1', 'Benefit 2'],
      process: ['Step 1', 'Step 2'],
    },
  },
];
```

### Images

Configure image paths in `lib/images.ts`:

```typescript
export const images = {
  hero: '/images/hero-bg.jpg',
  dubaiCityscape: '/images/dubai-cityscape.jpg',
  // Add more images...
};
```

### Contact Form Integration

The contact API route is at `app/api/contact/route.ts`. Integrate with:
- Email service (SendGrid, Resend, Nodemailer)
- CRM system (Salesforce, HubSpot)
- Database (PostgreSQL, MongoDB, Supabase)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 🔧 Environment Variables

Create a `.env.local` file for environment variables:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 📱 Key Features Explained

### Animated Counters
Statistics on the services page animate from 0 to their target values using Intersection Observer and requestAnimationFrame for smooth 60fps animation.

### Auto-Scrolling Testimonials
Testimonials section features infinite horizontal scrolling with pause-on-hover functionality and profile pictures from external sources.

### Floating Navbar
The navbar becomes translucent with a glassmorphism effect when scrolling, providing a modern and elegant user experience.

### Premium Service Cards
Service cards feature background images, gradient overlays, floating icons with rotation effects, and smooth hover animations.

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For questions or support, please contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
