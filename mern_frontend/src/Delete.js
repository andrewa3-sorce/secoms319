import './App.css';
import App from './App';
import Read from './Read';
import Update from './Update';
import Create from './Create';
import ItemInfoPartial from "./ItemInfoPartial";
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

      function findItem() {
        let itemId = document.getElementById("_id").value;
        document.getElementById("findProduct").remove();
        fetch("http://localhost:4000/" + itemId, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            let mainContainer = document.getElementById("product");
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
            title.innerHTML = `${data.title}`;
    
            let category = document.createElement("a");
            category.href = "#";
            category.classList.add("text-muted");
            category.innerHTML = `${data.category}`;
    
            let h3 = document.createElement("h3");
            h3.classList.add("font-weight-semibold", "mb-0");
            h3.innerHTML = `$${data.price}`;
    
            let h7 = document.createElement("h7");
            h7.innerHTML = `${data.description}`;
    
            let div7 = document.createElement("div");
            div7.classList.add("text-muted", "mb-3");
            div7.innerHTML = `${data.rating.rate}/5 Rating | ${data.rating.count} Reviews`;
    
            let group = document.createElement("div");
            group.classList.add("form-group");
  
            let button = document.createElement("button");
            button.classList.add("btn", "btn-primary");
            button.id = "deleteItem";
            button.onclick = function(){
              let itemId = document.getElementById("_id").value;
              fetch("http://localhost:4000/" + itemId, {
                method: "DELETE",
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log("Delted item " + data);
                });
            }
            button.innerHTML = "Delete";
    
            group.appendChild(button);
    
            h6.appendChild(title);
            div6.appendChild(h6);
            div6.appendChild(category);
            div5.appendChild(div6);
            div5.appendChild(h3);
            div5.appendChild(h7);
            div5.appendChild(div7);
            div3.appendChild(div4);
            div2.appendChild(div3);
            div2.appendChild(div5);
            div1.appendChild(div2);
            mainContainer.appendChild(div1);
            mainContainer.appendChild(group);
          });
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
        <h1>Delete</h1>
        <div class="form-group">
          <label for="_id" class="form-label">
            Id
          </label>
          <input
            type="number"
            class="form-control"
            id="_id"
            min="0"
            placeholder=""
          />
        </div>
        <button
          class="btn btn-primary"
          id="findProduct"
          onClick={() => findItem()}
        >
          Find product
        </button>
      </div>
      <div id="product"></div>
    </div>
  );
}

export default Delete;