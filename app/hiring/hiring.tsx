import '@/app/ui/hiring/hiring.css';
import Parallax from '@/app/hiring/parallax';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import SparklesTextDemo from '@/app/hiring/magicUI';
import SparklesText from "@/components/magicui/sparkles-text";
import Form from '@/app/hiring/form';
import Human from '@/app/hiring/human';


export default function Hiring() {
    return (
        <div>
            <div>
                <div className="hiring-wrapper">

                    <section className="top-container">
                    <div className="banner-top">
                        <div className="ban-img-wrap">
                            <img src="/invite.png"></img>
                        </div>
                        <div className="ban-title-wrap">
                            <img src="/banner-title.png"></img>
                        </div>
                    </div>
                    {/* <header className="showcase"> */}
                        {/* <h1>
                        我們正在尋找夥伴
                        </h1> */}
                        {/* <SparklesTextDemo /> */}
                        {/* <SparklesText text="在OneOne的日子" colors={{first: '#edd790', second: '#8efc7b'}} className="showcase-title" sparklesCount={7} />;
                        <p>
                        在時刻的耐心打理之下，日子鼓勵你，隨時保持對自身感官的靈敏與覺知，精心的每一個姿態，呼吸收納之間，傳遞語言之外的撫慰。除了提供豐盛的物質依靠，我們奉上心靈的注視與溫暖，關懷伴隨著這裡的每一份子，尊重在自然的和諧下律動。你可以清晰明朗，且充滿活力的，在每一天發現自己與世界，重生的善意真相。
                        </p> */}

                    {/* </header> */}

                    </section>
                    <section className="boxes">
                    <Human />
                    <div className="box box-1">
                        <Form />
                        {/* <i className="fas fa-chart-pie fa-4x" />
                        <h1 className="job-sec-caption">現場服務人員</h1>
                        <SparklesText text="我們重視的" className="job-sec-caption" sparklesCount={4}/>
                        
                        <div className="job-sec-title">真實與深刻</div>
                        <div className="job-sec">
                            <p>
                            時間重新被拉長，我們佐以深層穩定的修煉，陪伴呵護著你的成長。每道柔和專注的提醒，日與夜交替的計畫經緯，都停泊在你意識的港灣。在這裡，我們提供動與靜的休憩，在高度集中，心無雜念的勞動過程中，讓腦和心各自在自我的時空中休息。專注的純然付出與創造，心隨之流動，自然無聲地向我們的賓客傳遞著款待之意，細緻，高尚嚴謹的行動讓恬靜的愜意油然而生，迴盪在幾經淬煉的優雅空間。
                            </p>
                        </div>

                        <div className="job-sec-title">我們想要透過什麼方式了解你?</div>
                        <div className="job-sec">
                            <p>什麼是你真心想要的? 讓你的心如此溫暖, 反覆炙熱? 產生源源不絕的活力與充沛?</p>
                            <p>你對發自內心熱愛的人事物，做過什麼對待，過程中的心態變化像是什麼樣的故事?</p>
                            <p>在壓力停在你的周圍以前，你如何讓自己保持平常心，發揮你平時就有的效率與品質?</p>
                            <p>維護店面：保持店面的整潔和美觀，確保所有產品都陳列整齊並具吸引力。</p>
                        </div>

                        <div className="job-sec-title">和你分享的日常基礎</div>
                        <div className="job-sec">
                            <p>培訓</p>
                            <p>我們仔細規劃了每一天關於你的可能性，在食品與作業技巧的課表與你的天賦交織之下，每
                            一個令人嚮往的品質，細，慢，沉，美，帶領你走向一座又一座的山脈。</p>
                        </div>
                        <div className="job-sec">
                            <p>支持</p>
                            <p>在每一段奇幻的長坡爬行，下坡陡降，我們如電子般靈動環繞，關照著你的完善與茁壯，在你尚未醒覺選擇相信之前，我們已經從未來瞥見如此盈滿充實的你，如山徑的夥伴，冰川雪巴守護者，風影隨形，伴侶在一旁鼓舞者你，支柱你超越過往的自己。在你進入必要的暗黑洗禮的同時，我們燭起一處溫暖的泉眼，為你注入持續相信的柴火。</p>
                        </div> */}
                    </div>
                    
                    {/* <div className="box box-2">
                        <i className="fas fa-globe fa-4x" />
                        <h1 className="job-sec-caption">萬萬執行店長</h1>
                        <SparklesText text="開啟無限可能的世界" className="job-sec-caption" sparklesCount={7}/>
                        <div className="job-sec">
                            <p>
                            在一杯飲品中，我們為您呈現的不僅是味蕾的感官體驗，更是享受時光的棲所、身處片刻的靜謐，以及對生活品質的深刻詮釋與藝術。oneone 不只是一間飲品店，更是一趟奔向大山，潛入深海，品味深刻、創意與科技的探索旅程。
                            </p>
                        </div>

                        <div className="job-sec-title">品牌故事</div>
                        <div className="job-sec">
                            <p>oneone 的奶昔配方出自日本「白色戀人」創辦人荒木隆夫之手，秉持著匠人精神，日以繼夜地對品質的追求與完善。從咖啡到茶，每一款飲品都浸透著對細節的極致嚮往，猶如茶道中精心擺設的每一件茶具，蘊藏著對美好生活的深情凝視。每一口的飲嚼，都品味著萬物的禮讚，讓顧客體驗超越時間的感動。</p>
                        </div>

                        <div className="job-sec-title">智慧科技助力，輕鬆經營</div>
                        <div className="job-sec">
                            <p>全方位 POS 系統與設備支援：仿佛精密的手工時錶，先進的計算系統與 AI 智能點餐技術，為每一間加盟店注入穩定與有序的科技支持，化繁為簡，提升效率與回饋性。</p>
                            <p>AI 客戶顧客管理，精準回應需求：利用 AI 精準分析顧客需求，推薦客製選項。這不僅是科技的應用，更是一種對人性化服務的重新觀點與詮釋，將智慧與溫度融為一體。</p>
                        </div>
                    </div> */}

                    </section>
                    {/*
                    <div>
                    <section className="get-in-touch">
                        <h1 className="title">
                        Get in touch
                        </h1>
                         <form className="contact-form row">
                        <div className="form-field col x-50">
                            <input
                            className="input-text js-input"
                            id="name"
                            required
                            type="text"
                            />
                            <label
                            className="label"
                            htmlFor="name"
                            >
                            姓名
                            </label>
                        </div>
                        <div className="form-field col x-50">
                            <input
                            className="input-text js-input"
                            id="email"
                            required
                            type="email"
                            />
                            <label
                            className="label"
                            htmlFor="email"
                            >
                            E-mail
                            </label>
                        </div>
                        <div className="form-field col x-100">
                            <input
                            className="input-text js-input"
                            id="message"
                            required
                            type="text"
                            />
                            <label
                            className="label"
                            htmlFor="message"
                            >
                            Message
                            </label>
                        </div>
                        <div className="form-field col x-100 align-center">
                            <input
                            className="submit-btn"
                            type="submit"
                            value="Submit"
                            />
                        </div>
                        </form> 
                    </section>

                </div>
                 */}                   

                </div>
                </div>
            {/* <Parallax /> */}
        </div>
)};