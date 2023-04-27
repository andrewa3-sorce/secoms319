import "./App.css";
import App from "./App";
import Read from "./Read";
import Create from "./Create";
import Delete from "./Delete";
import ItemInfoPartial from "./ItemInfoPartial";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Update() {
  function goToApp() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
  function goToCreate() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Create />
      </React.StrictMode>
    );
  }

  function goToRead() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Read />
      </React.StrictMode>
    );
  }

  function goToUpdate() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Update />
      </React.StrictMode>
    );
  }

  function goToDelete() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Delete />
      </React.StrictMode>
    );
  }

  function renderItemPartial(){
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <Update />
        <ItemInfoPartial />
        <div class="form-group">
            <label for="newPrice" class="form-label">
              New Price
            </label>
            <input type="number" class="form-control" id="newPrice" min="0" placeholder="" />
          </div>
        <button class="btn btn-primary">Update Price</button>
    </React.StrictMode>
    );
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
              <a class="nav-link active" onClick={() => goToApp()}>
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
        <h1>Update</h1>
        <div class="form-group">
            <label for="_id" class="form-label">
              Id
            </label>
            <input type="number" class="form-control" id="_id" min="0" placeholder="" />
          </div>
          <button class="btn btn-primary" onClick={() => renderItemPartial()}>
            Find product
          </button>
      </div>
    </div>
  );
}

export default Update;
