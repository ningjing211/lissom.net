'use client';

import Head from 'next/head';
import Script from 'next/script';
import '@/app/animate/styles.css';
import App from './App';

import '@/app/ui/animate-page.css';

export default function Page() {
    return (
          <div className="animate-page"> 
            <Head>
              <title>This page has a title 🤔</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
          <Script
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          />
          {/* <App /> */}
           
          </div>
    );
  }