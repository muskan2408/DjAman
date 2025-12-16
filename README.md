# DJ Aman Website

A modern, responsive static website for DJ Aman Dhuri, providing professional DJ setups and event entertainment services.

## Features

- **Home Page**: Hero section with services overview and call-to-action buttons
- **Services Page**: Detailed service offerings with icons and descriptions
- **Gallery Page**: Photo and video gallery with hover animations
- **Contact Page**: Contact form and WhatsApp integration
- **Dark Theme**: Premium dark design with vibrant neon accents
- **Animations**: Smooth animations using Framer Motion
- **Responsive**: Mobile-friendly design

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

- `app/`: Next.js app directory
  - `page.tsx`: Home page
  - `services/`: Services page
  - `gallery/`: Gallery page
  - `contact/`: Contact page
  - `components/`: Reusable components (Header, Footer)
  - `layout.tsx`: Root layout
  - `globals.css`: Global styles

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Vercel will automatically detect Next.js and deploy it.

### Manual Build

```bash
npm run build
npm run start
```

This is a Next.js app that can be deployed to Vercel, Netlify, or any hosting service that supports Node.js.
