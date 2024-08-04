import React, { useState } from 'react';
const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
      setCartItems([...cartItems, item]);
    };
    return (
        <div>
          <h2>Shopping Cart</h2>
          <button onClick={() => addItemToCart('Item 1')}>Add Item 1</button>
          <button onClick={() => addItemToCart('Item 2')}>Add Item 2</button>
          <button onClick={() => addItemToCart('Item 3')}>Add Item 3</button>
    
          <h3>Items in Cart:</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default Cart;
