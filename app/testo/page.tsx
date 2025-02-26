
import Head from 'next/head';
import Script from 'next/script';
import Testo from '@/app/testo/testo';
import '@/app/ui/peopleCount.css';


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

            <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/Stage%400.2.0.js"></Script>
            <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/MyMath.js"></Script>
            
            <Script
              src="/peopleCount.js"
            />
          
          <Testo />

           
          </div>
    );
  }