import './SelectColor.scss';

function SelectColor() {
    return (
        <section class="main__product--color">
            <span>Select Color: </span>
            <aside class="main__product--select_color">
                <span class="main__product--white" onclick="selectWhite()"></span>
                <span class="main__product--red" onclick="selectRed()"></span>
                <span class="main__product--pink" onclick="selectPink()"></span>
                <span class="main__product--black" onclick="selectBlack()"></span>
                <span class="main__product--copper" onclick="selectCopper()"></span>
            </aside>
        </section>
    )
}

export default SelectColor;