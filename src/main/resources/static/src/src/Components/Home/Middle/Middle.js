import './Middle.scss'

function Middle() {
    return (

    <section id="middle" class="middle">
        <section class="wrapper middle__wrapper--flex">
            <article class="middle__article middle__article--bgcolorPink">
                <section class="middle__content">
                    <h3 class="middle__title">Iphone 6</h3>
                    <p class="middle__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span class="middle__price">$399</span>
                </section>
                <img src="images/iPhone6s.png" alt="iphone 6s" class="middle__image middle__image--iphone" />
            </article>
            <article class="middle__article middle__article--plain">
                <img src="images/Oculus-Rift-profile_grande.png" alt="Oculus Rift profile grande" class="middle__image middle__image--vr" />
                <section class="middle__content middle__content--middle">
                    <h3 class="middle__title">Oculus Rift</h3>
                    <span class="middle__price">$349</span>
                </section>
               
            </article>
            <article class="middle__article middle__article--bgcolorGray">
                <section class="middle__content middle__content--last">
                    <h3 class="middle__title">GoPro Hero 6</h3>
                    <p class="middle__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span class="middle__price">$299</span>
                </section>
                
                <img src="images/GoPro.png" alt="Go Pro" class="middle__image middle__image--gopro" />
            </article>
        </section>
    </section>

    )
}

export default Middle;