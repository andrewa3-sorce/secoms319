import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
const Confirmation = (props) => {
  const [cart, setCart] = useState(props.cart);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    total();
  }, [cart]);

  let uniqueCartItems = [...new Set(props.cart)];

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  function redactedCardNumber(){
    let redactedCardNum = "XXXX-XXXX-XXXX-";
    let cardNumString = props.card + "";
    cardNumString = cardNumString.substring(12, 16);
    redactedCardNum = redactedCardNum + cardNumString;
    return redactedCardNum;
  }

  const listItems = uniqueCartItems.map((el) => (
    // PRODUCT
    <div class="row border-top border-bottom" key={el.id}>
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" src={el.image} />
        </div>
        <div class="col">
          <div class="row text-muted">{el.title}</div>
          <div class="row">{el.category}</div>
        </div>
        <div class="col">
          ${el.price} <span class="close">&#10005;</span>
          {howManyofThis(el.id)}
        </div>
      </div>
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={el.image} width={20} />
      {el.title}${el.price}
    </div>
  ));

  function returnToShop(){
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
    )
  };

  return (
    <div>
      <div class="card">
        <div class="row">
          {/* HERE, IT IS THE SHOPING CART */}
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>Order Confirmed</b>
                  </h4>
                </div>
              </div>
            </div>
            <div>{listItems}</div>
          </div>
          <div class="float-end">
            <p class="mb-0 me-5 d-flex align-items-center">
              <span class="small text-muted me-2">Order total:</span>
              <span class="lead fw-normal">${cartTotal.toFixed(2)}</span>
            </p>
            <p class="mb-0 me-5 d-flex align-items-center">
              <span class="small text-muted me-2">Tax:</span>
              <span class="lead fw-normal">${(cartTotal * 0.07).toFixed(2)}</span>
            </p>
            <p class="mb-0 me-5 d-flex align-items-center">
              <span class="small text-muted me-2">Order total w/ tax:</span>
              <span class="lead fw-normal">${(cartTotal * 1.07).toFixed(2)}</span>
            </p>
            <p>{props.name}</p>
          <p>{props.email}</p>
          <p>{redactedCardNumber()}</p>
          <p>{props.address}</p>
          <p>{props.address2}</p>
          <p>{props.city}</p>
          <p>{props.state}</p>
          <p>{props.zip}</p>
            <button onClick={()=>{returnToShop()}}>Return to Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
