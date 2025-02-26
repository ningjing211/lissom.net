
import Head from 'next/head';
import Script from 'next/script';
import Header from '@/app/ideas/header';
import Footer from '@/app/ideas/footer';
import Job from '@/app/job/job';

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
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        />

        <Script src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />

          {/* <Script
            src="https://unpkg.com/zdog@1.1.3/dist/zdog.dist.min.js"
          />*/}
          <Script
            src="/vision.js"
          /> 

          {/* <p>Dashboard Page</p> */}
          <div>
            <Header />
            <Job />
            <Footer />
          </div>
            
          </div>
    );
  }