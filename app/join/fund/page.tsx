// 
// import Head from 'next/head';
// import Script from 'next/script';
// import Join from '@/app/join/join';
import '@/app/ui/fund.css';

// import Testo from '@/app/testo/testo';
// import '@/app/ui/peopleCount.css';


export default function Page() {
    return (
        <div>
          <h1 className="fund-title">
            韓國瑜面紙擦拭計畫
          </h1>

          <div className="example">
            <div className="block">
              <div className="side -main" />
              <div className="side -left" />
            </div>
            <div className="block">
              <div className="side -main" />
              <div className="side -left" />
            </div>
            <div className="block">
              <div className="side -main" />
              <div className="side -left" />
            </div>
          </div>


          {/* <Testo /> */}
          
        </div>
    );
  }