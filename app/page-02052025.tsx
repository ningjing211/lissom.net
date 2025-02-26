
import Head from 'next/head';
import Script from 'next/script';
import Video from '@/app/origin/video';
import Header from '@/app/ideas/header';
import Intro from '@/app/ideas/intro';
import NumberShows from '@/app/ideas/number_shows';
import Wall from '@/app/ideas/wall';
import Items from '@/app/item/item';
import Featured from '@/app/ideas/featured';
import Footer from '@/app/ideas/footer';


export default function Page() {
    return (
          <>
            <Head>
            {/* <meta property="og:image:secure_url" content="https://lissom.vercel.app/thumbnail-lissom.png" /> */}
            <meta name="msapplication-TileImage" content="https://lissom.vercel.app/thumbnail-lissom.png" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="lissom.vercel.app"></meta>
            <meta property="og:url" content="https://lissom.vercel.app/"></meta>
            <meta property="og:image" content="https://lissom.vercel.app/link-thumbnail.png"></meta>
            <meta property="og:image:width" content="1200"></meta>
            <meta property="og:image:height" content="600"></meta>
            <meta property="og:locale" content="zh_TW"></meta>
            <meta name="description" content="純粹而極致的設計，勾勒出空間的尊貴格調。高品質木材與精湛工藝相結合，每一筆紋理皆訴說著時光的故事。這不只是家具，而是一種生活態度。"></meta>
            <link rel="icon" href="https://lissom.vercel.app/thumbnail-lissom.png" sizes="32x32" />
            <link rel="apple-touch-icon" href="https://lissom.vercel.app/thumbnail-lissom.png" />
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

        {/* <Script 
            src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"
        /> */}

        <Script 
            src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
        />

          {/* <Script
            src="https://unpkg.com/zdog@1.1.3/dist/zdog.dist.min.js"
          /> */}
          {/* <Script 
            src="/waypoints.js"
          /> */}
          
          {/* <Script
            src="/number_shows.js"
          /> */}
          <Script
            src="/wall.js"
          />
          <Script
            src="/header.js"
          />
          <div>
          <Header />
          <Video />
          <div className="front-page-div p-6">
            
            
            <Intro />
            <Wall />
            {/* <NumberShows /> */}
            {/* <Items /> */}
            <Featured />
            
          </div>
          <Footer />

          </div>
          </>
    );
  }