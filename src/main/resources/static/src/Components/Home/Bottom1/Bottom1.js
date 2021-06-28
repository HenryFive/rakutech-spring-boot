import './Bottom1.scss';
import Card from './Card/Card.js';
import { getList } from '../../../Services/list';

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
    const [data, loading] = getList('https://fakestoreapi.com/products?limit=10');

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
            {loading ? (
                    <div class="loader"></div>
                ) : (
                    data.map(data =>  (
                        <Card 
                            modelName={data.title} 
                            currentPrice={(data.price*0.9).toFixed(2)} 
                            regularPrice={data.price} 
                            image={data.image}
                        />
                    ))
                )
            }    
            </article>
            <a href="#" class="bottom1__button">Load More</a>
        </section>
    </section>

    )
}

export default Bottom1;