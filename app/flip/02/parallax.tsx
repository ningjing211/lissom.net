'use client';

import '@/app/ui/flip/02/parallax.css';
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
            <h1>Culture Importer</h1>
          </div>
        </section>
        <section id="origin">
          <div className="parallax-flip-02-one  animate-fadeInUp">
            {/* <h2>Philosophy</h2> */}
          </div>
        </section>
        
        <section  className="section-words">
          <div id="story" className="block">
            <p>
            奶昔，不僅是一杯飲品，更是一個時代的縮影。它的濃郁口感和色彩斑斕的配料，彷彿承載著美國20世紀中期的夢想與繁榮。它誕生於汽車旅館和路邊餐廳盛行的年代，象徵著一種自由流動的生活方式：跨越洲際的高速公路，霓虹燈閃爍下的加油站，以及疲憊旅人片刻的甜蜜享受。
            </p>
          </div>
        </section>
        
        <section>
          <div className="parallax-flip-02-two  animate-slideInLeft">
            {/* <h2>Culture</h2> */}
          </div>
        </section>

        <section  className="section-words">
          <div className="block">
            
            <p>一杯裡頭裝滿奶油、糖分，還有快樂的小旋風。它不是什麼高雅的藝術品，而是美國文化裡最接地氣的甜蜜代表。穿著圓裙的年輕女孩端著奶昔杯，畫面簡直比老電影還要經典。一杯奶昔，濃郁得像是對生活的低調表白：人生何嚐不為樂，來點甜的。

當時的社交場地，遠超今天的咖啡館。男孩女孩圍著點唱機，一邊吸著奶昔，一邊討論誰能跳更炫的搖擺舞。見證青春的叛逆與激情，一種對個性和自由的公開慶祝。像奶昔的口感，一切都來得這麼自然毫不遮掩，滑順得讓人忍不住。</p>
           </div>
        </section>

        <section>
          <div className="parallax-flip-02-three animate-zoomIn">
            {/* <h2>Believe</h2> */}
          </div>
        </section>

        <section  className="section-words">
          <div className="block">
            <p>奶昔的故事也沒那麼單純。當你攪拌它的時候，是不是會思考：這種極致的快樂是否也有點空洞？奶昔像極了一個糖衣炮彈，甜到心裡，但是否也掩蓋了更深層的渴望？或許，這杯飲品的真正文化意義是提醒我們，在追逐甜蜜的路上，也別忘了問自己：我們到底想要的是什麼？所以，下一次喝奶昔的時候，記得品味的不只是甜，而是那份屬於美國的幽默、自由和一點點對快樂的反思。</p>

           </div>
        </section>

        {/* <section>
          <div className="parallax-flip-02-four animate-zoomOut">
            <h2>Imagine</h2>
          </div>
        </section> */}



      </div>
    );
  }