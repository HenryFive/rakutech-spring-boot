import './Product.scss'
import DisplayProduct from './DisplayProduct/DisplayProduct.js';
import Aside from './Aside/Aside.js';
import Bottom1 from './Bottom1/Bottom1.js';

function Product() {
    return ( 
        <section>
            <section id="main" class="main">
                <section class="wrapper">
                    <DisplayProduct />
                    <Aside />
                </section>
            </section>
            <Bottom1 />
        </section>
    )
}

export default Product;