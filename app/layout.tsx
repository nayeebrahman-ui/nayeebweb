import type { Metadata } from 'next';
import '@/styles/base.css';
import '@/styles/home.css';
import '@/styles/shell.css';
import '@/styles/scroll.css';
import '@/styles/about.css';
import '@/styles/consulting.css';
import '@/styles/partner.css';
import '@/styles/case.css';
import '@/styles/hire.css';
import '@/styles/app.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nayeeb-website.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Nayeeb Rahman',
  description:
    'Nayeeb Rahman: product manager, business analyst and growth consultant based in Dhaka. 8 years across product, BA and research.',
  openGraph: {
    type: 'website',
    title: 'Nayeeb Rahman',
    description: 'Product manager, business analyst and growth consultant based in Dhaka.',
    url: '/',
    images: [{ url: '/img/og.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/img/og.jpg'] },
};

const FONTS =
  'https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@500;700&family=Manrope:wght@400;500;600;700&family=Noto+Serif+JP:wght@700;900&display=swap';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The runtime adds classes to <html> (e.g. "js"), so its attributes differ from the server render.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Mark JS as available before first paint so entrance styles apply without a flash. */}
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>{children}</body>
    </html>
  );
}
