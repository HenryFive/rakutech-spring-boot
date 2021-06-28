import './SelectQuantity.scss';

function SelectQuantity() {
    return (
        <section class="cart-section__table-row--qty main__product--quantity">
            <button class="cart-section__table-row--qty--minus-btn" id="qty-minus-btn">-</button>
            <div class="cart-section__table-row--qty--number">2</div>
            <button class="cart-section__table-row--qty--plus-btn" id="qty-plus-btn">+</button>
        </section>
    )
}

export default SelectQuantity;