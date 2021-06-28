import './Bottom1.scss';
import Card from '../../Home/Bottom1/Card/Card.js';

const cardData = [
    { modelName : "Apple MacBook Pro", currentPrice : 499, regularPrice : 599 },
    { modelName : "Apple MacBook Air", currentPrice : 399, regularPrice : 499 },
    { modelName : "Apple MacBook", currentPrice : 349, regularPrice : 449 },
    { modelName : "Asus Rog G15", currentPrice : 399, regularPrice : 499 },
]

function Bottom1() {
    return (
        <section id="bottom1" class="bottom1">
            <section class="wrapper">
                <header class="bottom1__header">
                    <h2>Related Products</h2>
                </header>
                <article class="bottom1__products bottom1__products--margin">
                
                    {cardData.map(item => (
                        <Card modelName={item.modelName} currentPrice={item.currentPrice} regularPrice={item.regularPrice} />
                    ))}
                </article>
            </section>
        </section>
    )
}

export default Bottom1;