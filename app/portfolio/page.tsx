
import Head from 'next/head';
import Script from 'next/script';
import Hero from '@/app/portfolio/hero';
import '@/app/ui/portfolio.css';


export default function Page() {
    return (
          <div> 
            <Head>
              <title>This page has a title 🤔</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

          <Hero />

           
          </div>
    );
  }