
import Head from 'next/head';
import Script from 'next/script';

import TutorialComponent from '@/app/dashboard/TutorialComponent';

export default function Page() {
    return (
          <div> 
            <Head>
              <title>This page has a title 🤔</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
          <Script
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          />
          <Script
            src="https://unpkg.com/zdog@1.1.3/dist/zdog.dist.min.js"
          />
          {/* <Script
            src="/warp.js"
          /> */}
          {/* <canvas
            style={{ display: "block", inlineSize: "100%", maxInlineSize: 400 }}
            width={400}
            height={400}
          /> */}
          <p>Dashboard Page</p>
          <TutorialComponent />
            
          </div>
    );
  }