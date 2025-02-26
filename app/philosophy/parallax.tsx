'use client';

import '@/app/ui/philosophy/parallax.css';
import React from 'react';
import { useEffect } from 'react';


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
            <h1>里山的信仰與價值</h1>
          </div>
        </section>
        <section id="origin">
          <div className="parallax-philosophy-one  animate-fadeInUp">
            <h2>Philosophy</h2>
          </div>
        </section>
        
        <section  className="section-words">
          <div id="story" className="block">
            <p>
            想聽你說說南風輕拂稻田故事，河水流過村落的悠然。家具，大地賦予的一種溫度，一種來自亞熱帶土地的呼吸感。泰國的柚木溫潤堅韌，寺廟中經年不衰的雕梁畫棟，越南的藤編，手指靈巧穿梭間，交錯出日昇月落的流動韻律，中國雲南的香樟木，溫潤而富有層次，自古便是文人書桌的首選，伴隨筆墨流轉，細語千年思緒，緬甸金茶色的原木油脂細膩，隨歲月越發光澤，如街巷裡一盞溫暖燈火，相遇台灣的肖楠，木帶清新，過去曾是神殿與古厝的靈魂，如今仍散發著與天地共存的靜謐韻味，守候每一個歸來的人。土地的水系與山脈，滋養著木材的肌理，從南方的熱帶雨林到東北亞的溫帶山脈，木材的紋理記錄了四季流轉，也透視進家具的心魂。
            </p>
          </div>
        </section>
        
        <section>
          <div className="parallax-philosophy-two  animate-slideInLeft">
            <h2>Culture</h2>
          </div>
        </section>

        <section  className="section-words">
          <div className="block">
            <p>從斯堪地那維亞的寧靜木屋，到日本和室的禪意空間，文化為家具注入靈魂。</p>
            <p>各洲大地的原始森林給予我們珍貴木材，而世界的工藝則確保其歷久彌新。亞洲的凝練與謙卑，跨坐在空間裡交織成氣息，為生活點上層次與燭光。家具不只是物件，而是文化的傳遞，每一張桌、每一把椅，皆包裹著世界各地的深情心意，塑造專屬於您的生活美學。</p>
           </div>
        </section>

        <section>
          <div className="parallax-philosophy-three animate-zoomIn">
            <h2>Believe</h2>
          </div>
        </section>

        <section  className="section-words">
          <div className="block">
            <p>一件好家具不只是擺設，而是經典的參與者。源自北歐的極簡美學，日本的精工細作，德國的嚴謹結構，純淨原材共同構築我們對品質的承諾。我們選擇可持續木材，堅持環保塗裝，讓每一件作品皆能在歲月流轉間，依舊維持最純粹的狀態。信念，體現在每一次觸摸的溫潤，每一道工藝的細膩，每一次坐下的安心。我們不只製造家具，我們打造傳承與信任。</p>
           </div>
        </section>

        <section>
          <div className="parallax-philosophy-four animate-zoomOut">
            <h2>Imagine</h2>
          </div>
        </section>

        <section  className="section-words">
          <div className="block">

            {/* <div className="sub-title">和 Lissom 在一起的日子</div> */}
            <p>那一座被晨霧輕撫的山谷，芬芳的空氣透過細膩的蕾絲窗紗滑入，木質調的空間沉穩如調香師手中的琥珀，萬千層層交疊，世界柔和卻不失個性。編織的藤草椅，一針一線，三敲四打，嘎吱嚓啦手工流蘇，在光影流轉間展現靈動韻律，每一隻昆蟲路過的原木，如嫩芽般隨匠人的靈魂長出每一道紋理，哪怕是曾經為時間流連的光影，生活，一場無需妥協的藝術，我們以設計賦予室內靈魂，讓每一件個體都如精靈般，為您的空間舞出獨一無二的交響。</p>
           </div>
        </section>

      </div>
    );
  }