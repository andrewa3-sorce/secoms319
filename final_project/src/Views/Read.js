import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
import Delete from "./Delete";
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles.css";
let displayedData = false;

function Read(props) {

  function goToHome() {
    displayedData = false;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Home products={props.products} cart={props.cart}/>
      </React.StrictMode>
    );
  }
  function goToCreate() {
    displayedData = false;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Create products={props.products} cart={props.cart}/>
      </React.StrictMode>
    );
  }

  function goToRead() {
    displayedData = false;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Read products={props.products} cart={props.cart}/>
      </React.StrictMode>
    );
  }

  function goToUpdate() {
    displayedData = false;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Update products={props.products} cart={props.cart}/>
      </React.StrictMode>
    );
  }

  function goToDelete() {
    displayedData = false;
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Delete products={props.products} cart={props.cart}/>
      </React.StrictMode>
    );
  }

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
            let div1 = document.createElement("div");
            div1.classList.add("col-md-4", "mt-2");

            let div2 = document.createElement("div");
            div2.classList.add("card"); 

            let div3 = document.createElement("div");
            div3.classList.add("card-body"); 

            let div4 = document.createElement("div");
            div4.classList.add("card-image-actions");

            let img = document.createElement("img");
            img.classList.add("center");
            img.src = data[i].image;

            let div5 = document.createElement("div");
            div5.classList.add("card-body", "bg-light", "text-center"); 

            let div6 = document.createElement("div");
            div6.classList.add("mb-2"); 

            let h6 = document.createElement("h6");
            h6.classList.add("font-weight-semibold", "mb-2"); 

            let title = document.createElement("h2");
            title.classList.add("text-default", "mb-2");
            title.style.color= "black";
            title.innerHTML = `${data[i].title}`;

            let category = document.createElement("h5");
            category.classList.add("text-muted");
            category.innerHTML = `${data[i].category}`;

            let h3 = document.createElement("h3");
            h3.classList.add("font-weight-semibold", "mb-0"); 
            h3.style.color = "black";
            h3.innerHTML = `$${data[i].price}`;

            let h7 = document.createElement("h7");
            h7.innerHTML = `${data[i].description}`;

            h6.appendChild(title);
            div6.appendChild(h6);
            div6.appendChild(category);
            div5.appendChild(div6);
            div5.appendChild(h3);
            div5.appendChild(h7);
            div4.appendChild(img);
            div3.appendChild(div4);
            div2.appendChild(div3);
            div2.appendChild(div5);
            div1.appendChild(div2);
            mainContainer.appendChild(div1);
          } // end of for
      });
  }

  executeDisplay();
  return (
    <div>
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
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" onClick={() => goToHome()}>
                Home
              </a>
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
      <div>
        <h1>Read</h1>
        <div class="container d-flex justify-content-center mt-50 mb-50">
          <div id="productList" class="row">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
