import './App.css';

import Header from './Components/Header/Header.js';
import Banner from './Components/Home/Banner/Banner.js';
import Middle from './Components/Home/Middle/Middle.js';
import Bottom1 from './Components/Home/Bottom1/Bottom1.js';
import Bottom2 from './Components/Home/Bottom2/Bottom2.js';
import Bottom3 from './Components/Home/Bottom3/Bottom3.js';
import Bottom4 from './Components/Home/Bottom4/Bottom4.js';
import Product from './Components/Product/Product.js'
import ProductList from './Components/ProductList/ProductList'
import Footer from './Components/Footer/Footer.js';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Router  >
          <Header />
            <Route path="/" exact>
              <Banner />
              <Middle />
              <Bottom1 />
              <Bottom2 />
              <Bottom3 />
              <Bottom4 />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/product-list">
              <ProductList />
            </Route>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
