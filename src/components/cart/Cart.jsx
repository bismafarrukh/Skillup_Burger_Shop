

import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const styling={
  padding:"30px",
  height:"auto",
}

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState({
    1: { title: "Cheese Burger", img: burger1, value: 0 },
    2: { title: "Veg Cheese Burger", img: burger2, value: 0 },
    3: { title: "Cheeseburger with French Fries", img: burger3, value: 0 },
  });

  const increment = (itemKey) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      updatedItems[itemKey].value += 1;
      return updatedItems;
    });
  };

  const decrement = (itemKey) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      updatedItems[itemKey].value = Math.max(0, updatedItems[itemKey].value - 1);
      return updatedItems;
    });
  };

  const getTotalPrice = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.value,
      0
    );
  };

  return (
    <section className="cart" style={styling}>
      <div className="cartModal">
        <main style={{ height: "auto", overflowY: "visible" }}>
          {Object.keys(cartItems).map((itemKey) => (
            <CartItem
              key={itemKey}
              title={cartItems[itemKey].title}
              img={cartItems[itemKey].img}
              value={cartItems[itemKey].value}
              increment={() => increment(itemKey)}
              decrement={() => decrement(itemKey)}
            />
          ))}

          <article>
            <div>
              <h4>Sub Total</h4>
              <p>₹{getTotalPrice()}</p>
            </div>
            <div>
              <h4>Tax</h4>
              <p>₹{getTotalPrice() * 0.18}</p>
            </div>
            <div>
              <h4>Shipping Charges</h4>
              <p>₹{200}</p>
            </div>{" "}
            <div>
              <h4>Total</h4>
              <p>₹{getTotalPrice() + getTotalPrice() * 0.18 + 200}</p>
            </div>
            <Link to="/shipping">Checkout</Link>
          </article>
        </main>
      </div>
    </section>
  );
};

export default Cart;




