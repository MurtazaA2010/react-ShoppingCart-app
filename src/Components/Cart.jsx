import React from 'react';
import { useState} from 'react';
import './css/cart.css';
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';

const Cart = ({ cart }) => {
  const [quantities, setQuantities] = useState({});
  let shipping = 20;
  const history = useHistory();
  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  const handleShip = ()=> {
    history.push('/')
  }

  const calculateTotalPrice = (item) => {
    return item['new-price'] * (quantities[item.id] || 1);
  };

  const removeFromCart = (itemId) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[itemId];
      return newQuantities;
    });
  };

  // Calculate the total price for all items in the cart
  const totalCartPrice = cart.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  return (
    <div className="cart">
      {cart &&
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
             
             
              <Link  to={`/products/${item.id}`} className='togo'>
                <img src={item.src1} alt={item.title} className="item-image" />
                <div className="item-details" >
                  <p className="item-title">{item.title}</p>
                </div>
              </Link>
          
            <select
              value={quantities[item.id] || 1}
              onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
              className="quantity-select"
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <div className="item-price">
              <p className="price">${calculateTotalPrice(item).toFixed(2)}</p>
            </div>
            {/* <i
              className="fa-solid fa-xmark remove-icon"
              onClick={() => removeFromCart(item.id)}
            ></i> */}
          </div>
        ))}
      <div className="total-price">
        <p>Subtotal: ${totalCartPrice.toFixed(2)}</p>
        <p>Shipping Fee : ${totalCartPrice === 0 ? 0 : shipping.toFixed(2)}</p>
        <p>Total ${(totalCartPrice + (totalCartPrice === 0 ? 0 : shipping)).toFixed(2)}</p>
      </div>
      <div className="btns">
        <button className='shopping' onClick={handleShip}>Continue Shopping</button>
        <button className='shopping'>Checkout</button>
      </div>  
    </div>
  );
};

export default Cart;
