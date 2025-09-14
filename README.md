# Hire Laravel Developer (HLD) - Next.js Website

A modern Next.js website for hiring elite Laravel developers, built with App Router, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **WordPress Headless CMS** integration
- **Google Analytics 4** tracking
- **Contact Form** with API integration
- **SEO Optimized** with metadata
- **Responsive Design** for all devices

## 📊 Google Analytics 4 Setup

This project uses the official `@next/third-parties` package for Google Analytics 4 integration.

### Configuration

1. **Environment Variables**: The GA4 tracking ID is configured in `.env.local`:

   ```bash
   NEXT_PUBLIC_GA_ID=G-YW65P7F2FT
   ```

2. **Auto-tracking**: Pageview events are automatically tracked on route changes.

3. **Custom Events**: Custom event tracking is implemented via the `gaEvents` helper functions.

### Custom Event Tracking

The following events are tracked automatically:

- **hire_click**: When users click CTA buttons (location, button_text)
- **contact_submit**: When contact forms are submitted (form_type)
- **developer_view**: When developer profiles are viewed (developer_id, section)
- **pricing_interaction**: When pricing plans are viewed/selected (plan_type, action)
- **blog_engagement**: When users interact with blog posts (action, post_slug)

### Usage Examples

```typescript
import { gaEvents } from "@/app/_components/ga-events";

// Track hire button clicks
gaEvents.trackHireClick("hero", "START 7-DAYS TRIAL");

// Track contact form submissions
gaEvents.trackContactSubmit("hero_form");

// Track pricing interactions
gaEvents.trackPricingView("enterprise", "select");
```

### GA4 Enhanced Measurement Setup

**IMPORTANT**: To ensure proper page tracking, enable Enhanced Measurement in your GA4 property:

1. Go to Google Analytics → Admin → Data Streams
2. Click on your web stream
3. Toggle **Enhanced Measurement** to ON
4. Ensure **Page changes based on browser history events** is enabled

This allows GA4 to automatically track page views when users navigate between pages in the Next.js app without full page reloads.

### Development vs Production

- **Development**: Events are logged to console for debugging
- **Production**: Events are sent to GA4 (requires valid `NEXT_PUBLIC_GA_ID`)
- **Missing GA_ID**: Warnings are logged but no errors are thrown

## 🛠 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AashishRauniyar/hirelaraveldeveloper.git
   cd hirelaraveldeveloper
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Environment setup**:

   ```bash
   cp .env.example .env.local
   # Update .env.local with your values
   ```

4. **Run development server**:

   ```bash
   pnpm dev
   ```

5. **Open in browser**: [http://localhost:3000](http://localhost:3000)

## 🌐 Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-YW65P7F2FT

# WordPress CMS
WORDPRESS_URL=https://cms.hirelaraveldeveloper.dev/wp-json/wp/v2

# Add other environment variables as needed
```

## 📁 Project Structure

```
├── app/                     # Next.js App Router
│   ├── _components/         # Shared components
│   │   └── ga-events.tsx   # Google Analytics event tracking
│   ├── api/                # API routes
│   ├── blog/               # Blog pages
│   └── layout.tsx          # Root layout with GA4
├── components/             # React components
├── lib/                    # Utility functions
│   ├── wordpress.ts        # WordPress CMS integration
│   └── utils.ts           # General utilities
├── public/                 # Static assets
└── styles/                # Global styles
```

## 🔧 WordPress Integration

The project integrates with a headless WordPress CMS for blog content:

- **API Endpoint**: Configured via `WORDPRESS_URL` environment variable
- **Post Fetching**: Uses `getPostBySlug()` function
- **SEO Metadata**: Automatically generated from WordPress content
- **Featured Images**: Embedded media support

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Image Optimization**: Next.js Image component with WebP support
- **Bundle Analysis**: Optimized bundle size with tree shaking
- **SEO**: Complete metadata, Open Graph, and Twitter Cards

## 🚀 Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

### Deployment Checklist

- [ ] Environment variables configured
- [ ] GA4 Enhanced Measurement enabled
- [ ] WordPress CMS accessible
- [ ] Image domains whitelisted
- [ ] Custom domain configured (if applicable)

## 📝 License

This project is proprietary and confidential.

## 🤝 Contributing

This is a private project. Please contact the team for contribution guidelines.

---

**Built with ❤️ by the HLD Team**
