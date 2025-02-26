import '@/app/ui/parallax.css';
import React from 'react';

export default function Parallax() {
    return (
        <div id="parallax-world-of-ugg">
        <section>
          <div id="brand" className="title">
            {/* <h3>Ever Changing</h3> */}
            <h1>萬萬的信仰是什麼, 宣揚倡議什麼文化?</h1>
          </div>
        </section>
        <section id="origin">
          <div className="parallax-one">
            <h2>Philosophy</h2>
          </div>
        </section>
        
        <section>
          <div id="story" className="block">
            <p>
              <span className="first-character ny">我
              </span>們的故事始於對奶昔的熱愛與追求。在台灣，我們發現享受奶昔的體驗通常伴隨著高價格。為了讓更多人能以親民的價格品味到美味的奶昔，我們聚集了一群志同道合的夥伴，共同創建了一間當代新潮的奶昔店。
            </p>
          </div>
        </section>
      </div>
    );
  }