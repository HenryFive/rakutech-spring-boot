import './Header.scss'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCaretDown, 
    faUser, 
    faShoppingBasket, 
    faSearch,
    faBars 
} from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div class="wrapper">
        <header class="header">
            <div class="header__top">
                <span>EN&nbsp; <FontAwesomeIcon icon={faCaretDown} /></span>
                <span>USD&nbsp; <FontAwesomeIcon icon={faCaretDown} /></span>
                <div class="header__top--user-profile"><FontAwesomeIcon icon={faUser} /> My Profile</div>
                <div class="header__top--cart">
                    <a href="cart.html" class=""><FontAwesomeIcon icon={faShoppingBasket} /> 0 Items <span>$0.00</span></a>
                </div>
                <div class="header__top--search-icon"><FontAwesomeIcon icon={faSearch} /></div>
            </div>
            <div class="header--brand">
                <h1>RAKU<span>TECH</span></h1>
            </div>
            <nav class="header__main-nav header__mobile">
                <section class="header__nav">
                    <button type="button" class="header__main-nav--toggle">
                    <FontAwesomeIcon icon={faBars} />
                    </button>
    
                    <div class="header--brand header__mobile--logo">
                        <h1>RAKU<span>TECH</span></h1>
                    </div>
    
                    <div class="header__top--cart header__mobile--cart">
                        <a href="cart.html" class=""><FontAwesomeIcon icon={faShoppingBasket} /></a>
                    </div>
                </section>

                <secition class="header__nav-bar">
                    <ul>
                        <li>
                            <div class="header__main-nav__arrow-guide">
                                <i id="main-nav-arrow" class="header__main-nav__arrow-guide--arrow-up"></i>
                            </div>
                            <Link to="/" class="header__main-nav--home active" onmouseover="moveArrow('14px')" onmouseout="slowlyHideHeaderDropDownMenuNow()">
                                HOME
                            </Link>
                            <span class="header__main-nav--carret"><FontAwesomeIcon icon={faCaretDown} /></span>
                            
    
                            <nav class="header__mega-menu">
                                <div class="header__mega-menu__products">
                                    <h5>Category</h5>
                                    <ul>
                                        <li>Airport & Wireless</li>
                                        <li>AppleCare</li>
                                        <li>Bags, Shells & Sleeves</li>
                                        <li>Business & Security</li>
                                        <li>Cable & Docs</li>
                                        <li>Cameras & Video</li>
                                        <li>Car & Travel</li>
                                        <li>Cases & Films</li>
                                    </ul>
                                </div>
                                <div class="header__mega-menu__accessories-1">
                                    <h5>Category</h5>
                                    <ul>
                                        <li>Charging Devices</li>
                                        <li>Connected Home</li>
                                        <li>Device Care</li>
                                        <li>Display & Graphic</li>
                                        <li>Fitness & Sport</li>
                                        <li>Headphones</li>
                                        <li>HealthKit</li>
                                    </ul>
                                </div>
                                <div class="header__mega-menu__accessories-2">
                                    <h5>Category</h5>
                                    <ul>
                                        <li>Mice & Keyboards</li>
                                        <li>Music Creation</li>
                                        <li>Networking & Server</li>
                                    </ul>
                                </div>
                            </nav>
                        </li>
                        <li><a href="" class="header__main-nav--store" onmouseover="moveArrow('115px')" onmouseout="slowlyHideHeaderDropDownMenuNow()">STORE</a></li>
                        <li><Link to="/product" class="header__main-nav--iphone" onmouseover="moveArrow('220px')" onmouseout="slowlyHideHeaderDropDownMenuNow()">IPHONE</Link></li>
                        <li><a href="" class="header__main-nav--ipad" onmouseover="moveArrow('321px')" onmouseout="slowlyHideHeaderDropDownMenuNow()">IPAD</a></li>
                        <li><a href="" class="header__main-nav--macbook" onmouseover="moveArrow('432px')" onmouseout="slowlyHideHeaderDropDownMenuNow()">MACBOOK</a></li>
                        <li><Link to="/product-list" class="header__main-nav--accessories" onmouseover="moveArrow('570px')" onmouseout="slowlyHideHeaderDropDownMenuNow()">ACCESSORIES</Link></li>
                    </ul>
                </secition>
            </nav>
            <nav class="header__drop-down-nav" onmouseover="displayHeaderDropDownMenu()" onmouseout="slowlyHideHeaderDropDownMenuNow()">
                <div class="header__drop-down-nav__products">
                    <h5>Category</h5>
                    <ul>
                        <li>Airport & Wireless</li>
                        <li>AppleCare</li>
                        <li>Bags, Shells & Sleeves</li>
                        <li>Business & Security</li>
                        <li>Cable & Docs</li>
                        <li>Cameras & Video</li>
                        <li>Car & Travel</li>
                        <li>Cases & Films</li>
                    </ul>
                </div>
                <div class="header__drop-down-nav__accessories-1">
                    <h5>Category</h5>
                    <ul>
                        <li>Charging Devices</li>
                        <li>Connected Home</li>
                        <li>Device Care</li>
                        <li>Display & Graphic</li>
                        <li>Fitness & Sport</li>
                        <li>Headphones</li>
                        <li>HealthKit</li>
                    </ul>
                </div>
                <div class="header__drop-down-nav__accessories-2">
                    <h5>Category</h5>
                    <ul>
                        <li>Mice & Keyboards</li>
                        <li>Music Creation</li>
                        <li>Networking & Server</li>
                    </ul>
                </div>
            </nav>
        </header>
        </div>
    )
}

export default Header;