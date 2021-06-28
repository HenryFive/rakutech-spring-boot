import './ProductListCard.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faStar,
    faShoppingCart,
    faHeart    
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

export default function ProductListCard (props) {
    return (
        <section class="product-listing__products__card">
            <section class="product-listing__products__card--image">
                <span>HOT</span>
                <img src={props.image} alt="iMac" />
            </section>
            <section class="product-listing__products__card__details">
                <h3 class="product-listing__products__card__details--title">{props.modelName}</h3>
                <section class="product-listing__products__card__details--review">
                    <FontAwesomeIcon icon={faStar} class="glow"/>
                    <FontAwesomeIcon icon={faStar} class="glow"/>
                    <FontAwesomeIcon icon={faStar} class="glow"/>
                    <FontAwesomeIcon icon={faStar} class="glow"/>
                    <FontAwesomeIcon icon={faStar}/>
                    <span>0 Reviews</span>
                    <a href="#" class="main__product--submit">Submit a review</a>
                </section>
                <hr />
                <span class="product-listing__products__card__details--price">${props.currentPrice}
                    <span class="product-listing__products__card__details--price--before">${props.regularPrice}</span>
                </span>
                <p>{props.description}</p>
                <footer>
                    <button id="product-listing--add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                    <button id="product-listing--like-btn"><FontAwesomeIcon icon={farHeart} /></button>
                </footer>
            </section>
        </section>
    )
}