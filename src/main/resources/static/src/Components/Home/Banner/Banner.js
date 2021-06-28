import './Banner.scss';

function Banner() {
    return (
        <section id="banner" class="banner">
            <section class="wrapper banner__wrapper--flex">
                <section class="banner__content">
                    <h2 class="banner__product">iPhone X</h2>
                    <p class="banner__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                    <a href="#" class="banner__button">More</a>
                </section>

                <img class="banner__image" src="images/iphone-banner.png" alt="iphone" />
                <i class="fas banner__icon banner__icon--left fa-chevron-left"></i>
                <i class="fas banner__icon banner__icon--right fa-chevron-right"></i>
            </section>
        </section>
    )
}

export default Banner;