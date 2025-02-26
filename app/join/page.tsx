
import Head from 'next/head';
import Script from 'next/script';
import Join from '@/app/join/join';
import '@/app/ui/join.css';


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
            
            {/* <Script
              src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
            />
            <Script
              src="https://codepen.io/z-/pen/a8e37caf2a04602ea5815e5acedab458.js"
            />
            <Script
              src="/menu-pre.js"
            />*/}
            <Script
              src="/join.js"
            />

            <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/Stage%400.2.0.js"></Script>
            <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/MyMath.js"></Script>
            
            <Script
              src="/peopleCount.js"
            /> 

          <Join />

           
          </div>
    );
  }