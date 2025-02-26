import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
// import SideNav from '@/app/ui/dashboard/sidenav';

import { Metadata } from 'next';
 

export const metadata: Metadata = {
  title: {
    template: '%s | Lissom',
    default: 'Lissom',
  },
  description:
    '純粹而極致的設計，勾勒出空間的尊貴格調。高品質木材與精湛工藝相結合，每一筆紋理皆訴說著時光的故事。這不只是家具，而是一種生活態度。',
  metadataBase: new URL('https://lissom.vercel.app'),
  applicationName: 'Lissom',
  openGraph: {
    type: 'website',
    siteName: 'lissom.vercel.app',
    url: 'https://lissom.vercel.app/',
    images: [
      {
        url: 'https://lissom.vercel.app/link-thumbnail.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh_TW',
  },
  icons: {
    icon: 'https://lissom.vercel.app/thumbnail-lissom.png',
    apple: 'https://lissom.vercel.app/thumbnail-lissom.png',
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flow md:overflow-hidden`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="flex-grow md:overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}




