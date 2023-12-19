import './App.css';
import Hero from './Components/Hero.jsx';
import Navbar from './Components/Navbar.jsx';
import ProductDetails from './Components/ProductDetails.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Products from './JSON/Products.json';
import { useState } from 'react';
import Cart from './Components/Cart.jsx';
import NotFound from './Components/NotFound.jsx'
import Desktop from './Components/Desktop.jsx';
import Laptop from './Components/laptop.jsx'
import Console from './Components/Console.jsx';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    setCart((prevCart) => [...prevCart, data]);
    console.log(cart);
  };
  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'><Hero addToCart={addToCart} /></Route>
          <Route path='/products/:id'>
            <ProductDetails addToCart={addToCart} />
          </Route>
          <Route path='/cart'>
            <Cart cart={cart}/>
          </Route>
          <Route path='/desktops'>
            <Desktop addToCart={addToCart}/>
          </Route>
          <Route path='/laptops'>
            <Laptop addToCart={addToCart}/>
          </Route>
          <Route paht='/consoles'>
            <Console  addToCart={addToCart}/>
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
