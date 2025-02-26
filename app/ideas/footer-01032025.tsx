import '@/app/ui/ideas/footer.css';

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-group-left">
                    <div className="footer__addr">
                    <h1 className="footer__logo">
                    <a href="/">
                        <img src="/footer-logo.png" />
                    </a>
                    </h1>
                    {/* <h2>
                        Contact
                    </h2> */}
                    <br/>
                    <div className="footer-outer-wrap">
                        <div className="footer-item-wrap">
                            <h2>
                                總管理部
                            </h2>
                            <address className="address">
                                高雄市鼓山區明誠四路288號6樓
                                <br />
                                +886 (07) 555-0123
                                
                                <br/>

                            </address>
                        </div>
                        <div className="footer-item-wrap">
                            <h2>
                                城市的景點
                            </h2>
                            <address className="address">
                                高雄市三民區博愛路190號1樓 
                                
                                <br />
                                <br/>

                            </address>
                        </div>
                    </div>

                    </div>
                    <ul className="footer__nav">
                    {/* <li className="nav__item page-nav-group">
                        <h2 className="nav__title">
                        Pages
                        </h2>
                        <ul className="nav__ul">
                        <li>
                            <a href="/philosophy">
                            Philosophy
                            </a>
                        </li>
                        <li>
                            <a href="/core_value">
                            Value
                            </a>
                        </li>
                        <li>
                            <a href="/roots">
                            Roots
                            </a>
                        </li>
                        <li>
                            <a href="/vision">
                            Vision
                            </a>
                        </li>
                        </ul>
                    </li> */}
                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title">
                        Social Media
                        </h2>
                        <ul className="nav__ul nav__ul--extra">
                        <li>
                            <a href="#">
                            Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            Thread
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            Line
                            </a>
                        </li>
        
                    
                        </ul>
                    </li>
                    <li className="nav__item">
                        <h2 className="nav__title">
                        Legal
                        </h2>
                        <ul className="nav__ul">
                        <li>
                            <a href="#">
                            Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            Terms of Use
                            </a>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </div>
                <div className="footer-group-right">
                    <div className="footer-btn-group">
                            
                            <a
                            className="footer__btn"
                            href="mailto:pmp@conflux-tech.com"
                            >
                            Email
                            </a>

                            <a
                            className="footer__btn"
                            href="mailto:pmp@conflux-tech.com"
                            >
                            Contact
                            </a>
                            
                    </div>
                    <div className="footer-legal-group">
                        <div className="legal">
                        {/* <p className="legalword">
                            © 2024 Ever Changing All rights reserved.
                        </p> */}
                        <div className="legal__links">
                            <span>
                            All rights reserved.{' '}
                            <span className="heart">
                                © 2024 Ever Changing 
                            </span>
                            {' '} 
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
    );}

