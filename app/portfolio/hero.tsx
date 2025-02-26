export default function Hero() {
    return (
            <div>
            <section className="et-hero-tabs">
                <h1>
                萬萬想不到
                </h1>
                <h3>
                Ever Changing
                </h3>
                <div className="et-hero-tabs-container">
                <a
                    className="et-hero-tab"
                    href="/origin"
                >
                    Origin
                </a>
                <a
                    className="et-hero-tab"
                    href="#tab-flexbox"
                >
                    Philosophy
                </a>
                <a
                    className="et-hero-tab"
                    href="#tab-react"
                >
                    Vision
                </a>
                <a
                    className="et-hero-tab"
                    href="/menu"
                >
                    Menu
                </a>
                <a
                    className="et-hero-tab"
                    href="/join"
                >
                    Join
                </a>
                <span className="et-hero-tab-slider" />
                </div>
            </section>
            <main className="et-main">
                <section
                className="et-slide"
                id="tab-es6"
                >
                <h1>
                    <a href="/origin">Origin</a>
                </h1>
                <h3>
                    something about
                </h3>
                </section>
                <section
                className="et-slide"
                id="tab-flexbox"
                >
                <h1>
                    Philosophy
                </h1>
                <h3>
                    something about 
                </h3>
                </section>
                <section
                className="et-slide"
                id="tab-react"
                >
                <h1>
                    Vision
                </h1>
                <h3>
                    something about
                </h3>
                </section>
                <section
                className="et-slide"
                id="tab-angular"
                >
                <h1>
                    <a href="/menu">
                        Menu
                    </a>
                </h1>
                <h3>
                    something about
                </h3>
                </section>
                <section
                className="et-slide"
                id="tab-other"
                >
                <h1>
                    <a href="/join">
                        Join
                    </a>
                </h1>
                <h3>
                    something about 
                </h3>
                </section>
            </main>
            </div>
    )};