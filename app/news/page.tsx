
import Head from 'next/head';
import Script from 'next/script';
import Header from '@/app/ideas/header';
import Footer from '@/app/ideas/footer';
import News from '@/app/news/news';

export default function Page() {
    return (
          <>
            <Head>
            <meta property="og:image:secure_url" content="/thumbnail-lissom.png" />
            <meta name="msapplication-TileImage" content="/thumbnail-lissom.png" />
            <link rel="icon" href="/thumbnail-lissom.png" sizes="600x600" />
            <link href="https://fonts.googleapis.com/css2?family=Alice&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700;800;900&display=swap" rel="stylesheet" />
            <link rel="apple-touch-icon" href="/thumbnail-lissom.png" />
            <title>Lissom</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

          <Script
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          />

        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        />

        <Script src="https://cdn.jsdelivr.net/npm/momentum-slider@latest/dist/momentum-slider.min.js" />

        <Script src="/news.js" />
        
        <Script
            src="/header.js"
          />

          {/* <p>Dashboard Page</p> */}
          <div> 
            <Header />
            <div className="md:p-6 outer-background"> 
              
              <News />
              
            </div>
            <Footer />
            

          </div>
        </>
    );
  }