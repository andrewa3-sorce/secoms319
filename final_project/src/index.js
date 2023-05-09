import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Home from './Views/Home';
import 'bootstrap/dist/css/bootstrap.css';

let Products = [];
async function init() {
  await fetch("http://localhost:4001/")
    .then((response) => response.json())
    .then((data) => {
      console.log("Got data");
      for (let i in data) {
        Products.push(data[i]);
      }
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <React.StrictMode>
          <Home products={Products} />
        </React.StrictMode>
      );
    });
}

init();
