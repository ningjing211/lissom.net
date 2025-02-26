'use client';

import '@/app/ui/flip/01/parallax.css';
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
            <h1>Like My Style?</h1>
          </div>
        </section>
        <section id="origin">
          <div className="parallax-flip-01-one  animate-fadeInUp">
            {/* <h2>Philosophy</h2> */}
          </div>
        </section>
        
        <section  className="section-words">
          <div id="story" className="block">
            <p>
              萬萬奶昔店有什麼特別的？萬萬奶昔力圖再開台灣罕見的奶昔市場，但並不僅僅止步於單純的又一間飲料店，而是以走在科技最前沿的人工智慧AI技術為主枝幹，匯賦新創的各項獨家技術為繁茂的枝葉，是極為前衛、且為此而生的線下大型語言模型互動及學習場域——想像走進一間飲料店，出聲服務的卻是訓練有素的AI，在有如太空艙般的冷調空間裡，填滿了襲自酸性設計的迷幻色系——才踏進去，便宛如身置星際異空間，沒錯，這就是此一世代最新穎的體驗，所有意想不到的神奇體驗，都將在此發生。
            </p>
          </div>
        </section>
        
        <section>
          <div className="parallax-flip-01-two  animate-slideInLeft">
            {/* <h2>Culture</h2> */}
          </div>
        </section>

        <section  className="section-words">
          <div className="block">
            
            <div className="sub-title">萬萬奶昔：線下的創新試驗場</div>
            <p>不僅僅是一間奶昔店，它更是匯賦新創實現創新理念的線下實驗室。在這裡，每一杯奶昔的誕生，都承載著匯賦新創的核心技術與經營哲學。從 LINE CRM 系統, AI人工智慧點餐, 到 POS 系統，店內的一切運營細節，無不體現了匯賦新創在數位化與線下場景結合上的長遠期許。一個充滿溫度的線下空間。無論是參與設計的員工，還是作為股東的創意夥伴，他們共同將匯賦新創的創意注入到這家店裡，為顧客帶來更直觀的品牌體驗。這不僅僅是一杯奶昔，而是一個品牌與消費者互動的生態系統。在這裡，您可以感受到創新如何具象化為日常的一部分——從點餐的每一次選擇，到每一口品味的細膩。萬萬奶昔店，不僅是對未來零售的想像，更是一個探索與實現的舞台，讓創新從雲端落地，為每個顧客帶來驚喜與感動。</p>
           </div>
        </section>

        <section>
          <div className="parallax-flip-01-three animate-zoomIn">
            {/* <h2>Believe</h2> */}
          </div>
        </section>

        <section  className="section-words">
          <div className="block">
            <p>那麼這神奇的奶昔店究竟會在何時正式展店營業呢？</p>
            <p>歡迎隨時關注我們的最新消息！！</p>
           </div>
        </section>

        {/* <section>
          <div className="parallax-flip-01-four animate-zoomOut">
            <h2>Imagine</h2>
          </div>
        </section> */}



      </div>
    );
  }