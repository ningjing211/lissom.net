
import Head from 'next/head';
import Script from 'next/script';
import Header from '@/app/ideas/header';
import Footer from '@/app/ideas/footer';
import Article from '@/app/article/article';
import '@/app/ui/article.css';


export default function Page() {
    return (
          <div> 
            <Head>
              <title>This page has a title 🤔</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
              <link rel="stylesheet" href="https://static.fontawesome.com/css/fontawesome-app.css" />
              <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.2.0/css/all.css" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700" />
              <link rel="stylesheet" href="" />
            </Head>

            <Script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></Script>
            
            <Script
              src="/article.js"
            />

          <Article />
           
          </div>
    );
  }