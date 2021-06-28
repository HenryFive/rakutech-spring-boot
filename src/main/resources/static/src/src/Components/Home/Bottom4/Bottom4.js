import './Bottom4.scss';

function Bottom4() {
    return (
        <section id="bottom4" class="bottom4">
            <section class="wrapper">
                <h2 class="bottom4__title">Latest News</h2>
                <section class="bottom4__news bottom4__news--upper">
                    <article class="bottom4__news__box">
                        <img src="images/smart-phone-card.png" alt="Smart Phone" class="bottom4__news__image" />
                        <div class="bottom4__news__holder">
                            <span class="bottom4__news__date">01 Jan, 2015</span>
                            <h4 class="bottom4__news__title">Typesetting industry</h4>
                            <p class="bottom4__news__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bottom4__news__box">
                        <img src="images/latest-news2.png" alt="macbook" class="bottom4__news__image" />
                        <div class="bottom4__news__holder">
                            <span class="bottom4__news__date">01 Jan, 2015</span>
                            <h4 class="bottom4__news__title">Typesetting industry</h4>
                            <p class="bottom4__news__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                    <article class="bottom4__news__box">
                        <img src="images/latest-news3.png" alt="iphone" class="bottom4__news__image" />
                        <div class="bottom4__news__holder">
                            <span class="bottom4__news__date">01 Jan, 2015</span>
                            <h4 class="bottom4__news__title">Typesetting industry</h4>
                            <p class="bottom4__news__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </article>
                </section>

                <h2 class="bottom4__title">Featured Products</h2>
                <section class="bottom4__news bottom4__news--lower">
                    <article class="bottom4__news__box">
                        <img src="images/beats_solo.png" alt="Beats Solo" class="" />
                        <div class="bottom4__news__holder">
                            <h4 class="bottom4__news__title bottom4__news__title--font">Beats Solo 2 On Ear Headphones - Black</h4>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <footer class="bottom1__card__footer">
                                <span class="bottom1__card__price">$499</span>
                                <span class="bottom1__card__price bottom1__card__price--before">$599</span>
                            </footer>
                        </div>
                    </article>
                    <article class="bottom4__news__box">
                        <img src="images/H_tvTry.png" alt="H-Squared tvTry" class="" />
                        <div class="bottom4__news__holder">
                            <h4 class="bottom4__news__title bottom4__news__title--font">H-Squared tvTray</h4>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <footer class="bottom1__card__footer">
                                <span class="bottom1__card__price">$499</span>
                                <span class="bottom1__card__price bottom1__card__price--before">$599</span>
                            </footer>
                        </div>
                    </article>
                    <article class="bottom4__news__box">
                        <img src="images/Netatmo_Rain_Gauge.png" alt="Netatmo Rain Gauge" class="" />
                        <div class="bottom4__news__holder">
                            <h4 class="bottom4__news__title bottom4__news__title--font">H-Squared tvTray</h4>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <footer class="bottom1__card__footer">
                                <span class="bottom1__card__price">$499</span>
                                <span class="bottom1__card__price bottom1__card__price--before">$599</span>
                            </footer>
                        </div>
                    </article>
                </section>

                <section class="bottom4__search">
                    <input type="text" name="search" id="search" placeholder="Search query..." />
                    <a href="#" class="bottom4__btn">Search</a>
                </section>
            </section>
        </section>
    )
}

export default Bottom4;