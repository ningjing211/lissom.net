'use client';

import { useEffect } from 'react';
import '@/app/ui/core_value/parallax.css';

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
            <h1>我們的核心價值</h1>
          </div>
        </section>
        <section  id="origin">
          <div className="parallax-core_value-one animate-fadeInUp">
            <h2>沈靜品質</h2>
          </div>
        </section>
        
        <section className="section-words">
          <div id="story" className="block">
            <p>在平靜與安寧的禮遇下，我們躺臥在智能與自然的兩條河水交接處的大石上，以數據分析優化材料的選用，確保每一份生長都被精彩得轉換，提升價值。遠古文明與現代科技的交融，在瀰漫香氣的原木客廳裡，躺下一座浩瀚的悠閒自在。</p>
          </div>
        </section>
        
        <section>
        <div className="parallax-core_value-two animate-slideInLeft">
            <h2>品牌意識</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            <p>旅人以地球為家，讓生態鏈更純粹，不只是打造家具，而是重新思考產品如何與世界共存。從森林到工廠，從運輸到最終進入您的家，每一道流程都經過嚴格評估，降低碳排，減少資源浪費。我們深知，家具不只是「物」，而是與大地、海洋、未來子民共生的環節。因此，我們從選材開始，採用可持續木材，並監控供應鏈碳足跡；運輸階段，優化路線減少能源消耗；工廠端，導入智能生產技術，降低製造過程中的碳排與污染。我們相信，真正的美學與奢華，來自對地球的敬畏，我們只拿我們需要的，把剩餘的美好留給海洋、森林與未來的生命。</p>
          </div>
        </section>

        <section  >
        <div className="parallax-core_value-three animate-zoomIn">
            <h2>產品決策</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            
            <p>我們相信，精準的決策，來自嚴謹的系統。我們引進 Scrum、Kanban、Lean 等高效管理思維，確保每個環節都被優化，讓「美」與「效率」不再是對立，而是共存的力量。我們將工作流打磨至最順暢，減少無謂的繁瑣過程，讓時間真正流向更高層次的創造——讓細節更精緻，讓工藝更純熟，讓材料更珍貴。這不只是為了提升生產效率，而是為了讓節省下來的時間，能夠回饋給更多需要的人。家具的存在，應該是溫暖而實用的，不是因為稀有而昂貴，而是因為它真正解決了人的需求，讓每一位選擇我們的人，都能擁有高品質、可負擔的生活之美。</p>

          </div>

          

        </section>

        <section>
        <div className="parallax-core_value-four animate-zoomOut">
            <h2>客戶體驗</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
          
            <p>我們的家具，來自世界，也回應世界。我們學習佛教的智慧，學會「聆聽」，而非「強加」。我們不製造多餘的物品，而是理解人們真正的需求，打造能夠陪伴人一生的存在。每一件家具，都承載著選擇它的人的故事，因此，我們珍惜每一次的相遇，讓每個細節都滿足最真實的渴望。我們不追求盲目的市場潮流，而是尊重生活本質，讓家回歸家的意義。當一張椅子、一張桌子不只是物件，而是日常的陪伴者，它才擁有真正的價值。</p>

          </div>

          

        </section>

      </div>
    );
  }