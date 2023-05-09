import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.js";
import VideoGames from "./VideoGames.js";
import TradingCardGames from "./TradingCardGames.js";
import Checkout from "./Checkout.js";
import Admin from "./Admin.js";
import "../styles.css";

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
      totalVal += parseInt(cart[i].price);
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

  const listItems = uniqueCartItems.map((el) => (
    <div class="row border-top border-bottom" key={el.id}>
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" src={el.image} />
        </div>
        <div class="col">
          <div style={{color: "white"}} class="row">{el.title}</div>
          <div style={{color: "gray"}} class="row">{el.category}</div>
        </div>
        <div style={{color: "lightgray"}} class="col">
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

  function goToVideoGames() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <VideoGames products={props.products} cart={null} />
      </React.StrictMode>
    );
  }
  function goToTradingCardGames() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <TradingCardGames products={props.products} cart={null} />
      </React.StrictMode>
    );
  }
  function goToHome() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Home products={props.products} cart={null} />
      </React.StrictMode>
    );
  }
  function goToCheckout() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Checkout products={props.products} cart={null} />
      </React.StrictMode>
    );
  }
  function goToAdmin() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Admin products={props.products} cart={null} />
      </React.StrictMode>
    );
  }

  return (
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
      />
      <header class="masthead mb-auto">
        <div class="inner">
          <h2 style={{ fontSize: "48px" }} class="masthead-brand">
            Gaming Store
          </h2>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link" onClick={() => goToHome()}>
              Home
            </a>
            <a class="nav-link" onClick={() => goToVideoGames()}>
              Video Games
            </a>
            <a class="nav-link" onClick={() => goToTradingCardGames()}>
              Trading Card Games
            </a>
            <a class="nav-link" onClick={() => goToCheckout()}>
              <i class="bi-cart"></i>
            </a>
            <a class="nav-link" onClick={() => goToAdmin()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-fill-lock"
                viewBox="0 0 16 16"
              >
                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
              </svg>
            </a>
          </nav>
        </div>
      </header>
      <div class="row">
        {/* HERE, IT IS THE SHOPING CART */}
        <div class="col-md-8 cart">
          <div class="title">
            <div class="row">
              <div class="col">
                <h4 style={{ color: "white" }}>
                  <b>Order Confirmed</b>
                </h4>
              </div>
              <div
                style={{ color: "lightgray" }}
                class="col align-self-center text-right"
              >
                Products selected: {props.cart.length}
              </div>
            </div>
          </div>
          <div>{listItems}</div>
        </div>

        <div class="float-end">
          <p
            style={{ color: "white" }}
            class="mb-0 me-5 d-flex align-items-center"
          >
            <span class="small me-2">Order total:</span>
            <span class="lead fw-normal">${cartTotal.toFixed(2)}</span>
          </p>
          <p
            style={{ color: "white" }}
            class="mb-0 me-5 d-flex align-items-center"
          >
            <span class="small me-2">Tax:</span>
            <span style={{ color: "white" }} class="lead fw-normal">
              ${(cartTotal * 0.07).toFixed(2)}
            </span>
          </p>
          <p
            style={{ color: "white" }}
            class="mb-0 me-5 d-flex align-items-center"
          >
            <span class="small me-2">Order total w/ tax:</span>
            <span class="lead fw-normal">${(cartTotal * 1.07).toFixed(2)}</span>
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
              goToHome();
            }}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
