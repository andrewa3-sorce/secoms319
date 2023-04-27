import './App.css';
import App from './App';
import Read from './Read';
import Update from './Update';
import Create from './Create';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Delete() {
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
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-link active" onClick={() => goToApp()}>Home</a>
              <a class="nav-link" onClick={() => goToCreate()}>Create</a>
              <a class="nav-link" onClick={() => goToRead()}>Read</a>
              <a class="nav-link" onClick={() => goToUpdate()}>Update</a>
              <a class="nav-link" onClick={() => goToDelete()}>Delete</a>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <h1>
            Delete
        </h1>
    </div>
    </div>
  );
}

export default Delete;