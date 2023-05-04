import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import VideoGames from "./VideoGames";
import "./Games.css";
let displayedData = false;

export const TradingCardGames = (props) => {
  console.log("Step 1: After reading file :");
  let cartState = [];
  if (props.cart != null) {
    for (let i = 0; i < props.cart.length; ++i) {
      cartState.push(props.cart[i]);
    }
  }

  let Products = fetch("http://localhost:4001/")
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

  function goToTradingCardGames() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <TradingCardGames cart={cart} />
      </React.StrictMode>
    );
  }

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
  const render_products = () => {
    for(let i=0; i<9; ++i){

    }
    return (
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <div class="card-body">
                <p class="card-text">
                  Description here
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

  function executeDisplay(){
    if (!displayedData){
      getAllMethod();
      console.log("executed");
      displayedData = true;
    }
  }

  function getAllMethod() {
    fetch("http://localhost:4001/")
      .then((response) => response.json())
      .then((data) => {
        let mainContainer = document.getElementById("productList");
        console.log(data);
          for (let i in data) {
            if(data[i].category == "Trading Card Game"){
              let div1 = document.createElement("div");
            div1.classList.add("col-md-4", "mt-2");

            let div2 = document.createElement("div");
            div2.classList.add("card"); 

            let div3 = document.createElement("div");
            div3.classList.add("card-body"); 

            let div4 = document.createElement("div");
            div4.classList.add("card-image-actions");
            div4.innerHTML = "Image";

            let div5 = document.createElement("div");
            div5.classList.add("card-body", "bg-light", "text-center"); 

            let div6 = document.createElement("div");
            div6.classList.add("mb-2"); 

            let h6 = document.createElement("h6");
            h6.classList.add("font-weight-semibold", "mb-2"); 

            let title = document.createElement("a");
            title.href = "#";
            title.classList.add("text-default", "mb-2");
            title.innerHTML = `${data[i].title}`;

            let category = document.createElement("a");
            category.href = "#";
            category.classList.add("text-muted");
            category.innerHTML = `${data[i].category}`;

            let h3 = document.createElement("h3");
            h3.classList.add("font-weight-semibold", "mb-0"); 
            h3.innerHTML = `$${data[i].price}`;

            let h7 = document.createElement("h7");
            h7.innerHTML = `${data[i].description}`;

            h6.appendChild(title);
            div6.appendChild(h6);
            div6.appendChild(category);
            div5.appendChild(div6);
            div5.appendChild(h3);
            div5.appendChild(h7);
            div3.appendChild(div4);
            div2.appendChild(div3);
            div2.appendChild(div5);
            div1.appendChild(div2);
            mainContainer.appendChild(div1);
            }
          } // end of for
      });
  }

  executeDisplay();

  return (
    <div>
      <header class="masthead mb-auto">
          <div class="inner">
            <h3 class="masthead-brand">Gaming Store</h3>
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
            </nav>
          </div>
        </header>
      <div>
        <h1>Trading Card Games</h1>
        <div class="container d-flex justify-content-center mt-50 mb-50">
          <div id="productList" class="row">
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingCardGames;
