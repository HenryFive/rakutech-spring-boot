import './ProductList.scss';
import ProductListCard from './ProductListCard/ProductListCard'
import React, { Fragment, useEffect, useState } from 'react';
import { getList } from '../../Services/list';

function ProductList(props) {
    const [data, loading] = getList('https://fakestoreapi.com/products?limit=10');
    
    // useEffect(() => {
    //         let mounted = true;
    //         getList()
    //         .then(items => {
    //             if(mounted) {
    //             setList(items)
    //             }
    //         })
    //         return () => mounted = false;
    //     };
    // }, [])

    return (
        <section class="product-listing wrapper">

        <section class="product-listing__filter">
            <nav class="product-listing__filter__categories">
                <h4>ACCESSORIES</h4>
                <ul class="product-listing__filter__categories--category-list">
                    <li><a href=""><span class="category">Apple Car</span><span class="available-stocks">2</span></a></li>
                    <li><a href="" class="active"><span class="category">Air port & wireless</span><span class="available-stocks">48</span></a></li>
                    <li><a href=""><span class="category">Cables & Docks</span><span class="available-stocks">14</span></a></li>
                    <li><a href=""><span class="category">Cases & Films</span><span class="available-stocks">15</span></a></li>
                    <li><a href=""><span class="category">Charging Devices</span><span class="available-stocks">23</span></a></li>
                    <li><a href=""><span class="category">Connected Home</span><span class="available-stocks">1</span></a></li>
                    <li><a href=""><span class="category">Headphones</span><span class="available-stocks">95</span></a></li>
                </ul>                
            </nav>
            <section class="product-listing__filter__prices">
                <h4>PRICES</h4>
                <div class="product-listing__filter__prices__ranger-text">
                    <span class="product-listing__filter__prices__ranger-text--ranger-label">Ranger: </span><span id="min-price">$13.99</span>&nbsp-&nbsp<span id="max-price">$25.99</span>
                </div>
                <div class="price-slider">
                  <input value="25000" min="0" max="120000" step="500" type="range"/>
                  <input value="50000" min="0" max="120000" step="500" type="range"/>
                </div>

            </section>
            <section class="product-listing__filter__color-picker">
                <h4>COLOR</h4>
                <div id="color-set">
                    <i id="color-pick-blue"></i>
                    <i id="color-pick-red"></i>
                    <i id="color-pick-black"></i>
                    <i id="color-pick-yellow"></i>
                    <i id="color-pick-pink"></i>
                    <i id="color-pick-gray"></i>
                </div>
            </section>
            <nav class="product-listing__filter--brand">
                <h4>BRAND</h4>
                <ul>
                    <li><a href=""><span>Apple</span> <span class="available-stocks">99</span></a></li>
                    <li><a href="" class="active"><span>LG</span> <span class="available-stocks">99</span></a></li>
                    <li><a href=""><span>Samsung</span> <span class="available-stocks">99</span></a></li>
                    <li><a href=""><span>Siemens</span> <span class="available-stocks">99</span></a></li>
                </ul>
            </nav>
        </section>

        <section class="product-listing__products">
            <section id="product-listing__products__featured" class="product-listing__products__featured">
                    <section class="product-listing__products__featured__text">
                        <h2 class="">iPhone 8</h2>
                        <p class="">Performance and design. Taken right to the edge.</p>
                        <a href="#" class="product-listing__products__featured__text--link">Shop Now</a>
                    </section>
        
                    <img class="product-listing__products__featured--img" src="images/iPhone6_Big.png" alt="iphone" />
            </section>
            
            <nav class="product-listing__products__sort">
                <nav class="product-listing__products__sort__options">
                    <div><span id="filter-result-number">13</span> Items</div>
                    <div>
                        <label id="sort-by-label">Sort By</label>
                        <select name="" id="product-listing--sort-by">
                            <option value="name">Name</option>
                            <option value="price">Price</option>
                        </select>
                    </div>
                    <div>
                        <label id="items-per-page">Show</label>
                        <select name="" id="product-listing--items-per-page">
                            <option value="12">12</option>
                            <option value="24">24</option>
                        </select>
                    </div>
                </nav>
                <nav class="product-listing__products__sort__display-choices">
                    <button id="display-as-grid" class="active"><i class="fas fa-th"></i></button>
                    <button id="display-as-list"><i class="fas fa-bars"></i></button>
                </nav>
            </nav>
            <Fragment>
                {loading ? (
                        <div class="loader"></div>
                    ) : (
                        data.map(data =>  (
                            <ProductListCard 
                                modelName={data.title} 
                                currentPrice={(data.price*0.9).toFixed(2)} 
                                regularPrice={data.price} 
                                description={data.description}
                                image={data.image}
                            />
                        ))
                    )
                }
            </Fragment>
            <nav class="product-listing__products__pagination">
                <ol>
                    <li><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="" class="active">3</a></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                </ol>
            </nav>
        </section>
    </section>

    )
}

export default ProductList;