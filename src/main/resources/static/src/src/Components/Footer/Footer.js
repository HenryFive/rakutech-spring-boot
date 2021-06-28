import './Footer.scss';

function Footer() {
    return (
        <footer class="footer">
            <div class="footer__top-outer-container">
                <div class="footer__top wrapper">
                    <div class="footer__top--brand-description">
                        <h3 class="footer__top--title">RAKUTECH</h3>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</span>
                    </div>
                    <div class="footer__top--social-media">
                        <h5 class="footer--heading">Follow Us</h5>
                        <span>Totam ullam reiciendis corrupti libero placeat aut. Earum quis expedita.</span>
                        <div><i class="fab fa-facebook-f"></i> <i class="fab fa-twitter"></i></div>
                    </div>
                    <div class="footer__top--contact-us">
                        <h5 class="footer--heading">Contact Us</h5>
                        <span>
                            My Company, 4578 Marmora Road, Glasgow<br />
                            D04 89GR<br />
                            Call us now: 0123-456-789<br />
                            Email: support@whatever.com
                        </span>
                    </div>
                </div>
            </div>
            <div class="footer__middle wrapper">
                <div class="footer__middle--site-map">
                    <h5 class="footer--heading">Information <i class="fas fa-arrow-up"></i></h5>
                    <ul>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div class="footer__middle--site-map">
                    <h5 class="footer--heading">Service <i class="fas fa-arrow-up"></i></h5>
                    <ul>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div class="footer__middle--site-map">
                    <h5 class="footer--heading">Extras <i class="fas fa-arrow-up"></i></h5>
                    <ul>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div class="footer__middle--site-map">
                    <h5 class="footer--heading">My Account <i class="fas fa-arrow-up"></i></h5>
                    <ul>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div class="footer__middle--site-map">
                    <h5 class="footer--heading">Useful Links <i class="fas fa-arrow-up"></i></h5>
                    <ul>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div class="footer__middle--site-map">
                    <h5 class="footer--heading">Our Offers <i class="fas fa-arrow-up"></i></h5>
                    <ul>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
            <div class="footer__bottom-outer-container">
                <div class="footer__bottom wrapper">
                    <span>© 2018 Ecommerce theme by www.bisenbaev.com</span>
                    <div class="footer__bottom--fund-transfers">
                        <img src="images/Western-union.png" alt="" />
                        <img src="images/Group 19.png" alt="" />
                        <img src="images/Paypal.png" alt="" />
                        <img src="images/visa.jpg" alt="" />
                    </div>
                </div>
                
            </div>
        </footer>
    )
}
    
export default Footer;