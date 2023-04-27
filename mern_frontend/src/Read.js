import "./App.css";
import App from "./App";
import Create from "./Create";
import Update from "./Update";
import Delete from "./Delete";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Read() {
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
        <h1>Read</h1>
        <div class="container d-flex justify-content-center mt-50 mb-50">
          <div class="row">
            <div class="col-md-4 mt-2">
              <div class="card">
                <div class="card-body">
                  <div class="card-img-actions">Image</div>
                </div>
                <div class="card-body bg-light text-center">
                  <div class="mb-2">
                    <h6 class="font-weight-semibold mb-2">
                      <a href="#" class="text-default mb-2" data-abc="true">
                        Toshiba Notebook with 500GB HDD & 8GB RAM
                      </a>
                    </h6>
                    <a href="#" class="text-muted" data-abc="true">
                      Laptops & Notebooks
                    </a>
                  </div>
                  <h3 class="mb-0 font-weight-semibold">$250.99</h3>
                  <h7>Description here</h7>
                  <div class="text-muted mb-3">4.3/5.0 rating | 34 reviews</div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-2">
              <div class="card">
                <div class="card-body">
                  <div class="card-img-actions">Image</div>
                </div>
                <div class="card-body bg-light text-center">
                  <div class="mb-2">
                    <h6 class="font-weight-semibold mb-2">
                      <a href="#" class="text-default mb-2" data-abc="true">
                        Toshiba Notebook with 500GB HDD & 8GB RAM
                      </a>
                    </h6>
                    <a href="#" class="text-muted" data-abc="true">
                      Laptops & Notebooks
                    </a>
                  </div>
                  <h3 class="mb-0 font-weight-semibold">$250.99</h3>
                  <h7>Description here</h7>
                  <div class="text-muted mb-3">4.3/5.0 rating | 34 reviews</div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-2">
              <div class="card">
                <div class="card-body">
                  <div class="card-img-actions">Image</div>
                </div>
                <div class="card-body bg-light text-center">
                  <div class="mb-2">
                    <h6 class="font-weight-semibold mb-2">
                      <a href="#" class="text-default mb-2" data-abc="true">
                        Toshiba Notebook with 500GB HDD & 8GB RAM
                      </a>
                    </h6>
                    <a href="#" class="text-muted" data-abc="true">
                      Laptops & Notebooks
                    </a>
                  </div>
                  <h3 class="mb-0 font-weight-semibold">$250.99</h3>
                  <h7>Description here</h7>
                  <div class="text-muted mb-3">4.3/5.0 rating | 34 reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
