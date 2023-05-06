import "./Home.css";
import Home from "./Home";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Create(props) {
    let largest;
    let idCount;
    if(props.products.length != 0){
      largest = props.products[0].id;
      for (let i in props.products) {
        if (props.products[i].id > largest){
          largest = props.products[i].id;
        }
      }
      idCount = largest+1;
    }
    else {
      idCount = 0;
    }
  function goToHome() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Home products={props.products} cart={props.cart}/>
      </React.StrictMode>
    );
  }
  function goToCreate() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Create products={props.products} cart={props.cart}/>
      </React.StrictMode>
    );
  }

  function goToRead() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Read products={props.products} cart={props.cart}/>
      </React.StrictMode>
    );
  }

  function goToUpdate() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Update products={props.products} cart={props.cart}/>
      </React.StrictMode>
    );
  }

  function goToDelete() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Delete products={props.products} cart={props.cart}/>
      </React.StrictMode>
    );
  }

  function postMethod() {
    fetch("http://localhost:4001/insert", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: idCount,
        title: document.getElementById("Title").value,
        price: document.getElementById("Price").value,
        description: document.getElementById("Description").value,
        category: document.getElementById("Category").value,
        image: document.getElementById("Image").value,
        year: document.getElementById("Year").value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    idCount++;
  }
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
        <h1>Create</h1>
        <div class="row g-3 form-border" id="create-form">
          <div class="form-group">
            <label for="Title" class="form-label">
              Title
            </label>
            <input type="text" class="form-control" id="Title" placeholder="" />
          </div>
          <div class="form-group">
            <label for="Price" class="form-label">
              Price
            </label>
            <input
              type="number"
              class="form-control"
              id="Price"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="Description" class="form-label">
              Description
            </label>
            <input
              type="text"
              class="form-control"
              id="Description"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="Category" class="form-label">
              Category
            </label>
            <input
              type="text"
              class="form-control"
              id="Category"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="Image" class="form-label">
              Image Url
            </label>
            <input type="text" class="form-control" id="Image" placeholder="" />
          </div>
          <div class="form-group">
            <label for="Year" class="form-label">
              Year
            </label>
            <input type="text" class="form-control" id="Year" placeholder="" />
          </div>
          <button
            class="btn btn-primary"
            onClick={() => postMethod()}
            type="submit"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
