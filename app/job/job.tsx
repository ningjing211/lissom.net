import '@/app/ui/job/job.css';
import Parallax from '@/app/job/parallax';
import { library, icon } from '@fortawesome/fontawesome-svg-core';

export default function Job() {
    return (
        <div>
            <div>
                <section className="info">
                    <img src="https://codetheweb.blog/assets/img/icon2.png" />
                    <h1>
                    Learn HTML —{' '}
                    <a
                        href="https://codetheweb.blog/"
                        target="_blank"
                    >
                        Code The Web
                    </a>
                    </h1>
                </section>
                <section className="cards-wrapper">
                    <div className="card-grid-space">
                    <div className="num">
                        01
                    </div>
                    <a
                        className="card"
                        href="https://codetheweb.blog/2017/10/06/html-syntax/"
                        style={{
                        'backgroundImage': 'url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)'
                        }}
                    >
                        <div>
                        <h1>
                            HTML Syntax
                        </h1>
                        <p>
                            The syntax of a language is how it works. How to actually write it. Learn HTML syntax…
                        </p>
                        <div className="date">
                            6 Oct 2017
                        </div>
                        <div className="tags">
                            <div className="tag">
                            HTML
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                    <div className="card-grid-space">
                    <div className="num">
                        02
                    </div>
                    <a
                        className="card"
                        href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
                        style={{
                        'backgroundImage': 'url(\'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg\')'
                        }}
                    >
                        <div>
                        <h1>
                            Basic types of HTML tags
                        </h1>
                        <p>
                            Learn about some of the most common HTML tags…
                        </p>
                        <div className="date">
                            9 Oct 2017
                        </div>
                        <div className="tags">
                            <div className="tag">
                            HTML
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                    <div className="card-grid-space">
                    <div className="num">
                        03
                    </div>
                    <a
                        className="card"
                        href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"
                        style={{
                        'backgroundImage': 'url(\'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg\')'
                        }}
                    >
                        <div>
                        <h1>
                            Links, images and about file paths
                        </h1>
                        <p>
                            Learn how to use links and images along with file paths…
                        </p>
                        <div className="date">
                            14 Oct 2017
                        </div>
                        <div className="tags">
                            <div className="tag">
                            HTML
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                </section>
            </div>
            {/* <Parallax /> */}
        </div>
)};