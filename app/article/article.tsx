import '@/app/ui/article.css';
import Script from 'next/script';

export default function Article() {
    return (
        <div>
            <nav>
                <div className="container">
                <div className="grid">
                    <div className="column-xs-12 column-sm-8">
                    <p id="logo">
                        眾人之事募資計畫
                    </p>
                    </div>
                    <div className="column-xs-12 column-sm-4">
                    <ul>
                        <li>
                        <a href="#about">
                            About
                        </a>
                        </li>
                        {/* <li>
                        <a href="#blog">
                            Blog
                        </a>
                        </li> */}
                        <li>
                        <a href="#">
                            Contact
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </nav>
            <header>
                <div className="container">
                <section className="grid intro">
                    <div className="column-xs-12 column-md-4">
                    <div className="info">
                        <h1>
                        Instant Disk Audio CP2
                        </h1>
                        <p className="lead">
                        致敬CD唱片美學，受到全世界樂迷好評推薦的CD Player系列推出第2代，增加了外放喇叭的設計，讓音樂在視覺跟聽覺都能成為生活的一部分。
                        </p>
                        <a
                        className="btn fill"
                        href="#"
                        >
                        瞭解更多
                        </a>
                    </div>
                    </div>
                    <div className="column-xs-12 column-md-8">
                    <div className="image-holder">
                        <div
                        className="image-block"
                        data-aos="reveal-bottom"
                        />
                        <img
                        className="main-img"
                        src="https://images.unsplash.com/photo-1613822225803-a59e181d2a96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </div>
                    </div>
                </section>
                </div>
            </header>
            <main>
                <div className="container">
                <section
                    className="grid"
                    id="about"
                >
                    <div className="column-xs-12 column-md-6">
                    <div className="image-holder">
                        <div
                        className="image-block"
                        data-aos="reveal-bottom"
                        />
                        <img src="https://images.unsplash.com/photo-1626585974582-05b8c6560e90?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                    </div>
                    <div className="column-xs-12 column-md-6">
                    <h2>
                        展示相框設計，讓CD封面宛如藝術品般可被欣賞
                    </h2>
                    <p>
                        日本km5公司在研發設計推出「 Instant Disk Audio-CP1 」後，其透過簡約設計使大眾目光再次回到CD以及專輯設計本身，讓CD融入室內家居日常生活，【致敬CD美學】的理念引起廣大樂迷共鳴，在日本、台灣、歐美地區皆獲得熱烈迴響。
                    </p>
                    <h2>
                    革新第二代：27mm薄型音響喇叭
                    </h2>
                    <p>
                    本次因應樂迷的迴響，增加搭載音響的「 Instant Disk Audio-CP2 」，最主要的困難點在於如何維持輕巧的機型及極簡外觀設計。在經過開發團隊與工廠多次來回討論設計，最終實現了設計性與實用性兼具、厚度僅27mm的薄型喇叭音響。
                    </p>
                    </div>
                </section>
                <section
                    className="grid"
                    id="blog"
                >
                    <div className="column-xs-12 text-center">
                    <h2>
                        相關報導
                    </h2>
                    </div>
                    <div className="column-xs-12 column-sm-4">
                    <a href="#">
                        <figure>
                        <img src="https://images.unsplash.com/photo-1551242032-0846083c870a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <figcaption>
                            <h4 className="category">
                            Fashion
                            </h4>
                            <h3>
                            Jean Shorts Cold-pressed Leggings
                            </h3>
                        </figcaption>
                        </figure>
                    </a>
                    </div>
                    <div className="column-xs-12 column-sm-4">
                    <a href="#">
                        <figure>
                        <img src="https://images.unsplash.com/photo-1627421367074-0735f6ddc254?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <figcaption>
                            <h4 className="category">
                            Life
                            </h4>
                            <h3>
                            Jean Shorts Cold-pressed Leggings
                            </h3>
                        </figcaption>
                        </figure>
                    </a>
                    </div>
                    <div className="column-xs-12 column-sm-4">
                    <a href="#">
                        <figure>
                        <img src="https://images.unsplash.com/photo-1558584609-4f40c370b7ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <figcaption>
                            <h4 className="category">
                            Travel
                            </h4>
                            <h3>
                            Jean Shorts Cold-pressed Leggings
                            </h3>
                        </figcaption>
                        </figure>
                    </a>
                    </div>
                    <div className="column-xs-12 text-center">
                    <a
                        className="btn outline"
                        href="#"
                    >
                        即刻加入
                    </a>
                    </div>
                </section>
                </div>
            </main>
            <footer>
                <div className="container">
                <section className="grid">
                    <div className="column-xs-12">
                    <p className="copyright">
                        © Copyright 2024 Ever Changing
                    </p>
                    </div>
                </section>
                </div>
            </footer>
            </div>
)};