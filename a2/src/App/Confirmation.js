import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

//fix
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

  function redactedCardNumber() {
    let redactedCardNum = "XXXX-XXXX-XXXX-";
    let cardNumString = props.card + "";
    cardNumString = cardNumString.substring(12, 16);
    redactedCardNum = redactedCardNum + cardNumString;
    return redactedCardNum;
  }

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems = uniqueCartItems.map((el) => (
    // PRODUCT
    <div class="row border-top border-bottom" key={el.id}>
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" src={require("./images/" + el.image)} />
        </div>
        <div class="col">
          <div style={{ color: "white" }} class="row text-muted">
            <p style={{ color: "white", fontFamily: "monospace" }}>
              {el.title}
            </p>
          </div>
          <div class="row">
            <p style={{ color: "gray", fontFamily: "monospace" }}>
              {el.category}
            </p>
          </div>
        </div>
        {/* <div class="col">
          <button
            class="btn btn-info"
            type="button"
            variant="light"
            onClick={() => removeFromCart(el)}
          >
            {" "}
            -{" "}
          </button>{" "}
          <button
            class="btn btn-info"
            type="button"
            variant="light"
            onClick={() => addToCart(el)}
          >
            {" "}
            +{" "}
          </button>
        </div> */}
        <div style={{ color: "white" }} class="col">
          ${el.price} <span class="close">&#10005;</span>
          {howManyofThis(el.id)}
        </div>
      </div>
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={"./images/" + el.image} width={20} />
      {el.title}${el.price}
    </div>
  ));

  function returnToShop() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  return (
    <div class="bg-dark">
      <h1 style={{ color: "white", fontFamily: "monospace" }}>
        Historical Gaming Collectables
      </h1>
      <div class="bg-dark-card">
        <div class="bg-dark-row">
          {/* HERE, IT IS THE SHOPING CART */}
          <div class="bg-dark col-md-8 cart">
            <div class="bg-dark title">
              <div class="bg-dark row">
                <div
                  style={{ textAlign: "right" }}
                  class="bg-dark col align-self-center text-right text-muted"
                >
                  Products selected {cart.length}
                  <div class="bg-dark col">
                    <h4>
                      <b>Order Confirmed</b>
                    </h4>
                  </div>
                </div>
              </div>
              <div>{listItems}</div>
            </div>
            <div class="bg-dark float-end">
              <p
                style={{ color: "white" }}
                class="mb-0 me-5 d-flex align-items-center"
              >
                <span class="small text-muted me-2">Order total:</span>
                <span class="lead fw-normal">${cartTotal.toFixed(2)}</span>
              </p>
              <p
                style={{ color: "white" }}
                class="mb-0 me-5 d-flex align-items-center"
              >
                <span class="small text-muted me-2">Tax:</span>
                <span style={{ color: "white" }} class="lead fw-normal">
                  ${(cartTotal * 0.07).toFixed(2)}
                </span>
              </p>
              <p
                style={{ color: "white" }}
                class="mb-0 me-5 d-flex align-items-center"
              >
                <span class="small text-muted me-2">Order total w/ tax:</span>
                <span class="lead fw-normal">
                  ${(cartTotal * 1.07).toFixed(2)}
                </span>
              </p>
              <p style={{ color: "white" }}>{props.name}</p>
              <p style={{ color: "white" }}>{props.email}</p>
              <p style={{ color: "white" }}>{redactedCardNumber()}</p>
              <p style={{ color: "white" }}>{props.address}</p>
              <p style={{ color: "white" }}>{props.address2}</p>
              <p style={{ color: "white" }}>{props.city}</p>
              <p style={{ color: "white" }}>{props.state}</p>
              <p style={{ color: "white" }}>{props.zip}</p>
              <button
                class="btn btn-success"
                onClick={() => {
                  returnToShop();
                }}
              >
                Return to Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
