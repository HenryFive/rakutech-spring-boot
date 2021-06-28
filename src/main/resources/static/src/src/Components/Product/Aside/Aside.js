import './Aside.scss'

function Aside() {
    return (
        <aside class="main__best-seller">
            <h3 class="main__best-seller__title">Best Seller</h3>
            <div class="bottom1__card">
                <div class="bottom1__card__flip">
                    <div class="bottom1__card__inner">
                        <div class="bottom1__card__front">
                            <img src="images/macbook-pro.png" alt="Macbook Pro" class="bottom1__card__image" />
                        </div>
                        <div class="bottom1__card__back">
                            <section class="bottom1__card__favCart">
                                <i class="bottom1__card__icon far fa-heart"></i>
                                <i class="bottom1__card__icon fas fa-shopping-cart"></i>
                            </section>
                        </div>
                    </div>
                </div>
                <h3 class="bottom1__card__title">Apple Macbook Pro</h3>
                <i class="fas fa-star bottom1__card__star"></i>
                <i class="fas fa-star bottom1__card__star"></i>
                <i class="fas fa-star bottom1__card__star"></i>
                <i class="fas fa-star bottom1__card__star"></i>
                <i class="fas fa-star bottom1__card__star"></i>
                <footer class="bottom1__card__footer">
                    <span class="bottom1__card__price">$499</span>
                    <span class="bottom1__card__price bottom1__card__price--before">$599</span>
                </footer>
            </div>
            <section class="main__best-seller--selector">
                <span></span><span class="active"></span><span></span><span></span>
            </section>

            <footer class="">
                <article class="middle__article middle__article--bgcolorGray main__side--product">
                    <section class="middle__content middle__content--last main__side--content">
                        <h3 class="middle__title main__side--title">GoPro Hero 6</h3>
                        <p class="middle__description main__side--description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span class="middle__price main__side--price">$299</span>
                    </section>
                    
                    <img src="images/GoPro.png" alt="Go Pro" class="middle__image middle__image--gopro main__side--image" />
                </article>
            </footer>
        </aside>
    )
}

export default Aside;