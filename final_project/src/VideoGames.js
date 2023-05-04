import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import { Products } from "./data";
import Home from "./Home";
import "./VideoGames.css";

export const VideoGames = (props) => {
  console.log("Step 1: After reading file :");
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

  function goToHome() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Home cart={cart} />
      </React.StrictMode>
    );
  }

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  // var ProductsCategory = Products;
  const render_products = (ProductsCategory) => {
    return (
      <div className="category-section fixed">
        {console.log("Step 3 : in render_products ")}
        <h2
          style={{ color: "white" }}
          className="text-3xl font-extrabold tracking-tight text-gray-600 category-
title"
        >
        </h2>
        <div
          className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-
cols-2 lg:grid-cols-6 xl:gap-x-10"
          style={{ maxHeight: "800px", overflowY: "scroll" }}
        >
          {/* Loop Products */}
          {ProductsCategory.map((product, index) => (
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <div class="card-body">
                  <p class="card-text">
                    {product.description}
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={"./images/" + el.image} width={20} />
      {el.title}${el.price}
    </div>
  ));

  function handleClick(tag) {
    console.log("Step 4 : in handleClick", tag);
    let filtered = Products.filter((cat) => cat.category === tag);
    setProductsCategory(filtered);
    ProductsCategory = filtered;
    console.log("Step 5 : ", Products.length, ProductsCategory.length);
  }
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
    <main role="main">

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Video Games</h1>
          <p class="lead text-muted">Shop our collectible video games!</p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            {render_products()}
          </div>
        </div>
      </div>

    </main>
  );
};

export default VideoGames;
