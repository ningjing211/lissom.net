import '@/app/ui/peopleCount.css';
import Script from 'next/script';

export default function Testo() {
    return (
        <div>

        <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/Stage%400.2.0.js"></Script>
        <Script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/MyMath.js"></Script>
        
        <Script
          src="/peopleCount.js"
        />
          <section>
              <h1 className="people-count">
                  1000
              </h1>
              <h2>
                  People have Donated!
              </h2>
          </section>
      </div>
)};