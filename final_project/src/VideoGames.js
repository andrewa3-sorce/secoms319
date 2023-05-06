import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import TradingCardGames from "./TradingCardGames";
import Checkout from "./Checkout.js";
import Admin from "./Admin.js";
import "./Games.css";

function VideoGames(props) {
  console.log("Step 1: After reading file :");
  let cartState = [];
  if (props.cart != null) {
    for (let i = 0; i < props.cart.length; ++i) {
      cartState.push(props.cart[i]);
    }
  }

  const [ProductsCategory, setProductsCategory] = useState(
    props.products.filter((cat) => cat.category === "Nintendo Game")
  );
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

  function goToTradingCardGames() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <TradingCardGames products={props.products} cart={cart} />
      </React.StrictMode>
    );
  }

  function goToVideoGames() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <VideoGames products={props.products} cart={cart} />
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
  function goToAdmin() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Admin products={props.products} cart={cart} />
      </React.StrictMode>
    );
  }

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  const render_products = () => {
    return (
      <div class="row">
        {ProductsCategory.map((product, index) => (
          <div key={index} class="col-md-4 mt-2">
            <div class="card">
              <div class="card-body">
                <div class="card-image-actions">
                  <img
                    style={{ maxWidth: "100%" }}
                    src={product.image}
                    class="center"
                  ></img>
                </div>
              </div>
              <div class="card-body bg-light text-center">
                <div class="card" style={{ background: "#333" }}>
                  <div class="mb-2">
                    <h3 class="font-weight-semibold mb-0">{product.title}</h3>
                  </div>
                  <h5 class="font-weight-semibold mb-2">${product.price}</h5>
                </div>
                <h7>{product.description}</h7>
              </div>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline"
                  style={{
                    background: "#bd3026",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={() => removeFromCart(product)}
                >
                  -
                </button>{" "}
                <button
                  type="button"
                  class="btn btn-sm btn-outline"
                  style={{
                    background: "#17802c",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={() => addToCart(product)}
                >
                  +
                </button>
              </div>
              <p style={{ textAlign: "center" }}>
                Quantity: {howManyofThis(product.id)}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    for (let i = 0; i < howManyofThis(el.id) - 1; ++i) {
      hardCopy.push(el);
    }
    setCart(hardCopy);
  };

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={"./images/" + el.image} width={20} />
      {el.title}${el.price}
    </div>
  ));

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(
      "Step 6 : in handleChange, Target Value :",
      e.target.value,
      " Query Value :",
      query
    );
    const results = ProductsCategory.filter((eachProduct) => {
      if (e.target.value === "") return ProductsCategory;
      return eachProduct.title
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setProductsCategory(results);
  };

  return (
    <div>
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
      <div class="container d-flex justify-content-center mt-50 mb-50">
        <div id="productList" class="row">
          <h2
            style={{ paddingTop: "10px", textAlign: "center" }}
            className="text-3xl font-extrabold tracking-tight text-gray-600 category-title"
          >
            Video Games (
            {
              props.products.filter((cat) => cat.category === "Nintendo Game")
                .length
            }
            )
          </h2>
          {render_products(ProductsCategory)}
        </div>
      </div>
    </div>
  );
}

export default VideoGames;
