import VideoGames from "./VideoGames.js";
import TradingCardGames from "./TradingCardGames.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Create from "./Create.js";
import Read from "./Read.js";
import Update from "./Update.js";
import Delete from "./Delete.js";
import {Password} from "./AdminPassword.js";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import "./Home.css";

function Admin(props) {
  let cartState = [];
  if (props.cart != null) {
    for (let i = 0; i < props.cart.length; ++i) {
      cartState.push(props.cart[i]);
    }
  }
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
    );
  }
  function goToCreate() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Create products={props.products} cart={cart} />
      </React.StrictMode>
    );
  }

  function goToRead() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Read products={props.products} cart={cart} />
      </React.StrictMode>
    );
  }

  function goToUpdate() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Update products={props.products} cart={cart} />
      </React.StrictMode>
    );
  }

  function goToDelete() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Delete products={props.products} cart={cart} />
      </React.StrictMode>
    );
  }

  function authorize() {
    if (document.getElementById("Password").value == Password) {
        console.log("Authorized");
        document.getElementById("navbarNavAltMarkup").classList.remove("disabled");
    }
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
            <a class="nav-link" onClick={() => goToCheckout()}>
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

      <main role="main" class="inner cover">
        <h1 class="cover-heading">Admin Page</h1>
        <div id="navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse disabled" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" onClick={() => goToCreate()}>
                Create
              </a>
              <a class="nav-link" onClick={() => goToRead()}>
                Read
              </a>
              <a class="nav-link" onClick={() => goToUpdate()}>
                Update
              </a>
              <a class="nav-link" onClick={() => goToDelete()}>
                Delete
              </a>
            </div>
          </div>
        </div>
      </nav>
        </div>
        <div class="form-group">
          <label style={{color: "white"}} for="Password" class="form-label">
            Password
          </label>
          <input type="text" class="form-control" id="Password" placeholder="" />
        </div>
        <button
          class="btn btn-primary"
          onClick={() => authorize()}
          type="submit"
        >
          Login
        </button>
      </main>
    </div>
  );
}

export default Admin;
