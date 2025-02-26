'use client';

import React from 'react';
import { useEffect } from 'react';
import '@/app/ui/roots/parallax.css';

export default function Parallax() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fadeInUp, .animate-slideInLeft, .animate-zoomIn, .animate-zoomOut');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.3 });
  
    elements.forEach(el => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);

  return (
        <div id="parallax-world-of-ugg">
        <section>
          <div id="brand" className="title">
            {/* <h3>Ever Changing</h3> */}
            <h1>我們的緣起</h1>
          </div>
        </section>
        <section  id="origin">
          <div className="parallax-roots-one animate-fadeInUp">
            <h2>細緻的提案選擇
</h2>
          </div>
        </section>
        
        <section className="section-words">
          <div id="story" className="block">
            <p>
            生活，不該只是例行公事，而是充滿靈感的提案。Lissom 將家具視為遊戲場，從一張桌子的形狀到椅子的角度，每個細節都是設計的對話，也是對生活方式的重新想像。我們在木紋裡尋找故事，在結構中探索趣味，讓空間不只是居所，而是靈感發酵的溫床。當家具不再只是「擺設」，而是讓人驚喜的夥伴，每一天，都能是一場自在優雅、富有創意的生活實驗。
            </p>
          </div>
        </section>
        
        <section>
          <div className="parallax-roots-two animate-slideInLeft">
            <h2>日常質地的反覆培養
</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            <p>
            家的故事，從一張桌子開始延展，從一把椅子的陪伴逐漸豐滿。Lissom 深信，真正的家具不只是擺放於空間之中，而是參與日常、記錄情感的存在。晨光下的早餐時光、深夜燈光下的交談、孩子在木質地板上畫下的第一筆塗鴉——這些片刻交織成家的記憶。我們以細膩工藝與溫潤設計，讓家具成為家的溫度，讓每個回家的瞬間，都充滿柔和的情感與生活的詩意。
            </p>
            </div>
        </section>

        <section  >
          <div className="parallax-roots-three animate-zoomIn">
            <h2>深根於城市，服務人群</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            <p>
            城市，是我們的養分，也是我們服務的起點。Lissom 不僅打造家具，更希望為每個生活在城市中的人，創造一處能夠真正放鬆的空間。我們汲取都市的節奏，結合細膩工藝與智能設計，讓家具適應不同居住方式，無論是靜謐的一隅，還是熱鬧的聚會場域。我們深知，每張桌椅背後都有一個故事，每個家都是繁忙城市中的避風港，因此我們專注設計能夠與生活共鳴的作品，讓家具成為溫暖人心的陪伴者。
            </p>
          </div>
        </section>

      </div>
    );
  }