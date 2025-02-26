import '@/app/ui/hiring/parallax.css';
import React from 'react';

export default function Parallax() {
    return (
        <div id="parallax-world-of-ugg">
        <section>
          <div id="brand" className="title">
            {/* <h3>Ever Changing</h3> */}
            <h1>我們的願景</h1>
          </div>
        </section>
        <section  id="origin">
          <div className="parallax-vision-one">
            <h2>Innovation</h2>
          </div>
        </section>
        
        <section className="section-words">
          <div id="story" className="block">
            <p>
              <span className="first-character ny">我
              </span>們的故事始於對奶昔的熱愛與追求。在台灣，我們發現享受奶昔的體驗通常伴隨著高價格。為了讓更多人能以親民的價格品味到美味的奶昔，我們聚集了一群志同道合的夥伴，共同創建了一間當代新潮的奶昔店。
            </p>
          </div>
        </section>
        
        <div>
  <div className="frame" />
  <section className="section grey">
    <div className="split-vision">
      <div className="column column-left">
        <div className="content">
          <h1 className="numbered">
            Milestone
          </h1>
        </div>
      </div>
    </div>
    <svg
      className="process js-animate"
      height="120"
      viewBox="0 0 960 120"
      width="960"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <polygon
          className="design"
          fill="#F57A73"
          points="0,120 144,101 298,36 355,43 403,25 480,72 780,120"
        />
        <polygon
          className="discover"
          fill="#50B1AA"
          points="0,120 67,47 144,75 261,79 297,107 469,120"
        />
        <polygon
          className="implement"
          fill="#FFB566"
          points="345,120 385,105 508,29 558,68 614,88 692,89 835,120"
        />
        <polygon
          className="deliver"
          fill="#60666A"
          points="577,120 788,29 898,60 960,120"
        />
        <polygon
          className="develop"
          fill="#43C0E6"
          points="393,120 538,85 624,14 681,25 788,87 922,120"
        />
      </g>
    </svg>
    <div className="process-details">
      <div className="discover">
        <div className="heading">
        產品和服務
        </div>
        <p>
        公司始終致力於不斷推出新的、改進的產品和服務來滿足市場需求。作為一家跨國科技公司，我們深知科技發展日新月異，市場需求也在不斷變化。因此，我們始終保持創新精神，積極研發新技術、新產品，超越客戶的期望。
        </p>
      </div>
      <div className="design">
        <div className="heading">
        研發投入和技術
        </div>
        <p>
        時刻緊跟最新技術的潮流！我們一直在尋找那些炫酷的技術來提升產品、服務和運營效率。畢竟，科技日新月異，不跟上步伐就落伍啦。我們在研發上的投資力度相當大，力求不斷推出具有前瞻性和競爭力的產品和服務。
        </p>
      </div>
      <div className="implement">
        <div className="heading">
        文化和流程
        </div>
        <p>
        無論你是新手還是老員工，只要有創意和想法，我們都歡迎。我們營造了一個開放和包容的環境，讓大家可以自由分享自己的點子。從頭腦風暴到實際執行，我們都有完善的支持系統，幫助員工將創意變為現實。此外，我們還設立了各種創新獎勵和激勵措施。
        </p>
      </div>
      <div className="develop">
        <div className="heading">
          合作對象
        </div>
        <p>
        萬萬確實通過重要的合作和收購來強化市場地位。這些合作不僅擴展了我們的產品和服務範圍，還加強了我們在行業內的影響力和競爭力。例如，我們曾與白色戀人等知名品牌進行戰略合作，以共同開發新產品或進入新市場。
        </p>
      </div>
      <div className="deliver">
        <div className="heading">
          社會影響
        </div>
        <p>
        我們公司致力於對社會和環境產生積極的影響。我們不僅在產品設計中考慮環境友好，還積極參與社區和社會責任項目。這包括支持可持續發展倡議、擴大教育機會，以及促進技術普及。我們深信，企業的成功不僅在於經濟成就，更在於我們對環境和社會的貢獻，這也是我們公司價值觀的核心之一。
        </p>
      </div>
    </div>
  </section>
</div>

        <section>
          <div className="parallax-vision-two">
            <h2>未來航行</h2>
          </div>
        </section>

        <section className="section-words">
          <div className="block">
            <p><span className="first-character ny">清</span>清晰的長期戰略計劃來實現我們的願景和遠景，靈活應對市場變化、快速調整戰略方向，以及利用數據分析和市場洞察來指導決策。這些計劃包括市場擴展、技術創新、客戶服務和公司運營的改進。我們的航行策略則著重於靈活應對市場變化，利用數據和市場洞察來指導決策，確保我們在競爭中持續成功。</p>
           </div>
        </section>

        <section  >
          <div className="parallax-vision-three">
            <h2>期盼夥伴的加入</h2>
          </div>
        </section>


      </div>
    );
  }