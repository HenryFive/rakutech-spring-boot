import './Bottom1.scss';
import Card from './Card/Card.js';

const cardData = [
    { modelName : "Apple MacBook Pro", currentPrice : 499, regularPrice : 599 },
    { modelName : "Apple MacBook Air", currentPrice : 399, regularPrice : 499 },
    { modelName : "Apple MacBook", currentPrice : 349, regularPrice : 449 },
    { modelName : "Asus Rog G15", currentPrice : 399, regularPrice : 499 },
    { modelName : "iPhone Pro Max", currentPrice : 449, regularPrice : 549 },
    { modelName : "iPhone Pro", currentPrice : 399, regularPrice : 499 },
    { modelName : "iPhone X", currentPrice : 389, regularPrice : 489 },
    { modelName : "iPhone 8", currentPrice : 349, regularPrice : 449 }
]
function Bottom1() {
    return (
    <section id="bottom1" class="bottom1">
        <section class="wrapper">
            <header class="bottom1__header">
                <h2>Best Seller</h2>
                <nav class="bottom1__nav">
                    <ul>
                        <li class="bottom1__menu bottom1__menu--active"><a href="#">All</a></li>
                        <li class="bottom1__menu"><a href="#">Mac</a></li>
                        <li class="bottom1__menu"><a href="#">iPhone</a></li>
                        <li class="bottom1__menu"><a href="#">iPad</a></li>
                        <li class="bottom1__menu"><a href="#">iPod</a></li>
                        <li class="bottom1__menu"><a href="#">Accessories</a></li>
                    </ul>
                </nav>
            </header>

            <article class="bottom1__products">
                <Card modelName={cardData[0].modelName} currentPrice={cardData[0].currentPrice} regularPrice={cardData[0].regularPrice} />
                <Card modelName={cardData[1].modelName} currentPrice={cardData[1].currentPrice} regularPrice={cardData[1].regularPrice} />
                <Card modelName={cardData[2].modelName} currentPrice={cardData[2].currentPrice} regularPrice={cardData[2].regularPrice} />
                <Card modelName={cardData[3].modelName} currentPrice={cardData[3].currentPrice} regularPrice={cardData[3].regularPrice} />
                <Card modelName={cardData[4].modelName} currentPrice={cardData[4].currentPrice} regularPrice={cardData[4].regularPrice} />
                <Card modelName={cardData[5].modelName} currentPrice={cardData[5].currentPrice} regularPrice={cardData[5].regularPrice} />
                <Card modelName={cardData[6].modelName} currentPrice={cardData[6].currentPrice} regularPrice={cardData[6].regularPrice} />
                <Card modelName={cardData[7].modelName} currentPrice={cardData[7].currentPrice} regularPrice={cardData[7].regularPrice} />
                
            </article>
            <a href="#" class="bottom1__button">Load More</a>
        </section>
    </section>

    )
}

export default Bottom1;