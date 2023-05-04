import VideoGames from "./VideoGames";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import { Products } from "./data";
import './Home.css';

function Home(props) {
  let cartState = [];
  if (props.cart != null) {
    for (let i = 0; i < props.cart.length; ++i) {
      cartState.push(props.cart[i]);
    }
  }
  const [ProductsCategory, setProductsCategory] = useState(Products);
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
        <VideoGames cart={cart} />
      </React.StrictMode>
    );
  }
  return (
    <body class="text-center">
      <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <header class="masthead mb-auto">
          <div class="inner">
            <h3 class="masthead-brand">Gaming Store</h3>
            <nav class="nav nav-masthead justify-content-center">
              <a class="nav-link active" href="#">
                Home
              </a>
              <a
                class="nav-link"
                onClick={() => {
                  goToVideoGames();
                }}
              >
                Video Games
              </a>
              <a class="nav-link" href="#">
                Trading Card Games
              </a>
            </nav>
          </div>
        </header>

        <main role="main" class="inner cover">
          <h1 class="cover-heading">Welcome to our Gaming Store!</h1>
          <p class="lead">
            We are your one-stop-shop for all things video and trading card
            games! Thanks for supporting our business.
          </p>
          <p class="lead">
            <a href="#" class="btn btn-lg btn-secondary">
              Learn more
            </a>
          </p>
        </main>
      </div>
    </body>
  );
}

export default Home;
