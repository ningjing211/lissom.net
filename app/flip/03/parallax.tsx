'use client';

import '@/app/ui/flip/03/parallax.css';
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
            <h1>Why Innovation?</h1>
          </div>
        </section>
        <section id="origin">
          <div className="parallax-flip-03-one  animate-fadeInUp">
            {/* <h2>Philosophy</h2> */}
          </div>
        </section>
        
        <section  className="section-words">
          <div id="story" className="block">
            <p>
            創新，空拍轉瞬即逝的旅程，哪次的落葉不會再重新理解世界的奇幻。每個靈感乍現的瞬間，我們都站在曠野中，感受那股未曾言說的意象。或許並不是為了「改變」什麼，而是為了再次與那份我們本能就懂得的智慧重新連結，手與草葉在互相對話，編織的不是形狀，而是人與土地的共同脈動。
            </p>
          </div>
        </section>
        
        <section>
          <div className="parallax-flip-03-two  animate-slideInLeft">
            {/* <h2>Culture</h2> */}
          </div>
        </section>

        <section  className="section-words">
          <div className="block">
            
            <p>一就像跳迪斯可，沒有固定的跳法，但一定得搖起來。不是每一次都選擇喝可樂，偶爾也得試試踩錯拍的尷尬，因為正是那些不合拍的瞬間，才蹦出最特別的節奏。創新不是什麼嚴肅的事，它更像是一種生活派對：帶點冒險、帶點試驗，還要帶著點幽默感。</p>
           </div>
        </section>

        <section>
          <div className="parallax-flip-03-three animate-zoomIn">
            {/* <h2>Believe</h2> */}
          </div>
        </section>

        <section  className="section-words">
          <div className="block">
            <p>生活這隻動物在我們心裡撒嬌的時候。我們本能地伸手撫摸它，卻又忍不住想問：你從哪來？為什麼選擇現在？它沒有回答，只是用一種靈動似鹿的眼眸，讓我們知道，城市的街道蜿蜒著樹的影子，祖父母們的慈悲，我們早晨的咖啡在杯緣留下星球運行的痕跡，生活總在我們不經意的細節裡開展；是無意間哼出的旋律，成為一天的背景音，整個世界在我們之間彼此交換氣息的時候，自然生長出的新枝新葉，腳下的土地正慢慢向你訴說它的語言，而天空的雲，也在用形狀和光影試探你的回應，先深深吸一口氣，然後允許世界通過你，成為什麼都可以的樣子。創新不是終點，而是那頭靜靜潛伏的動物，等待我們的靠近，等待一次毫無保留的擁抱。</p>

           </div>
        </section>

        {/* <section>
          <div className="parallax-flip-03-four animate-zoomOut">
            <h2>Imagine</h2>
          </div>
        </section> */}



      </div>
    );
  }