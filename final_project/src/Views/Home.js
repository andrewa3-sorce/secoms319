import VideoGames from "./VideoGames.js";
import TradingCardGames from "./TradingCardGames.js";
import Admin from "./Admin.js";
import Checkout from "./Checkout.js";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import '../styles.css';

function Home(props) {
  let cartState = [];
  if (props.cart != null) {
    for (let i = 0; i < props.cart.length; ++i) {
      cartState.push(props.cart[i]);
    }
  }
  //let Products = fetch("http://localhost:4001/")
  const [ProductsCategory, setProductsCategory] = useState(props.products);
  const [query, setQuery] = useState("");

  const [cart, setCart] = useState(cartState);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };
  function goToVideoGames() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <VideoGames products={props.products} cart={cart} />
      </React.StrictMode>
    );
  }
  function goToTradingCardGames() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <TradingCardGames products={props.products} cart={cart} />
      </React.StrictMode>
    );
  }
  function goToHome() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Home products={props.products} cart={cart} />
      </React.StrictMode>
    );
  }
  function goToCheckout() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Checkout products={props.products} cart={cart} />
      </React.StrictMode>
    )
  }
  function goToAdmin() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Admin products={props.products} cart={cart} />
      </React.StrictMode>
    )
  }
  return (
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
        <header class="masthead mb-auto">
          <div class="inner">
            <h2 style={{fontSize: "48px"}} class="masthead-brand">Gaming Store</h2>
            <nav class="nav nav-masthead justify-content-center">
              <a class="nav-link" onClick={()=>goToHome()}>
                Home
              </a>
              <a
                class="nav-link"
                onClick={() => goToVideoGames()}
              >
                Video Games
              </a>
              <a class="nav-link"
                onClick={() => goToTradingCardGames()}>
                Trading Card Games
              </a>
              <a class="nav-link"
                onClick={() => goToCheckout()}>
                <i class="bi-cart"></i>
              </a>
              <a class="nav-link"
                onClick={() => goToAdmin()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-lock" viewBox="0 0 16 16">
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                </svg>
              </a>
            </nav>
          </div>
        </header>
        <main role="main" class="inner cover">
          <h1 class="cover-heading">Welcome to our Gaming Store!</h1>
          <img src="https://i.imgur.com/HPtUokm.jpg" style={{maxWidth: "100%"}}></img>
          <p style={{color: "white"}} class="lead">
            We are your one-stop-shop for all things video and trading card
            games! Thanks for supporting our business.
          </p>
        </main>
      </div>
  );
}

export default Home;
