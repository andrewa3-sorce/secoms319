import "../App.css";
import ReactDOM from "react-dom/client";
import React, {useState, useEffect } from "react";
import {Products} from "./Products"
import {Categories} from "./Categories"
import Checkout from "./Checkout.js";
export const App = (props) => {
console.log("Step 1: After reading file :");
let cartState = [];
if(props.cart != null){
    for (let i=0; i<props.cart.length; ++i){
        cartState.push(props.cart[i]);
    }
}
const [ProductsCategory, setProductsCategory] = useState(Products);
const [query, setQuery] = useState('');

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

function howManyofThis(id) {
  let hmot = cart.filter((cartItem) => cartItem.id === id);
  return hmot.length;
}

// var ProductsCategory = Products;
const render_products = (ProductsCategory) => {
return <div className='category-section fixed'>
{console.log("Step 3 : in render_products ")}
<h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-
title">Products ({ProductsCategory.length})</h2>
<div className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-
cols-2 lg:grid-cols-6 xl:gap-x-10" style={{ maxHeight: '800px', overflowY: 'scroll'
}}>
{/* Loop Products */}
{ProductsCategory.map((product, index) => (
<div key={index} className="group relative shadow-lg" >
<div className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md
overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
<img
alt="Product Image"
src={product.image}
className="w-full h-full object-center object-cover lg:w-full lg:h-
full"
/>
</div>
<div className="flex justify-between p-3">
<div>
<h3 className="text-sm text-gray-700">
<a href={product.href}>
<span aria-hidden="true" className="absolute inset-0" />
<span style={{ fontSize: '16px', fontWeight:
'600' }}>{product.title}</span>
</a>
<p>Tag - {product.category}</p>
</h3>
<div class="col">
          <button
            type="button"
            variant="light"
            onClick={() => removeFromCart(product)}
          >
            {" "}
            -{" "}
          </button>{" "}
          <button type="button" variant="light" onClick={() => addToCart(product)}>
            {" "}
            +{" "}
          </button>
        </div>
        <div class="col">
          {howManyofThis(product.id)}
        </div>
</div>
<p className="text-sm font-medium
text-green-600">${product.price.toFixed(2)}</p>
</div>
</div>
))}
</div>
</div>
}

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
      <img class="img-fluid" src={el.image} width={20} />
      {el.title}${el.price}
    </div>
  ));

function handleClick(tag){
console.log("Step 4 : in handleClick", tag);
let filtered = Products.filter(cat => cat.category === tag);
setProductsCategory(filtered);
// ProductsCategory = filtered;
console.log("Step 5 : ", Products.length, ProductsCategory.length);
}
function goToCheckout(){
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
  <React.StrictMode>
    <Checkout cart={cart}/>
  </React.StrictMode>
);
}
const handleChange = (e) => {
setQuery(e.target.value);
console.log("Step 6 : in handleChange, Target Value :",e.target.value," Query Value :",query);
const results = ProductsCategory.filter(eachProduct => {
if (e.target.value === "") return ProductsCategory;
return eachProduct.title.toLowerCase().includes(e.target.value.toLowerCase())
});
setProductsCategory(results);
}
return (
<div className="flex fixed flex-row">
{console.log("Step 2 : Return App :",Products.length,ProductsCategory.length)}
<div className="h-screen bg-slate-800 p-3 xl:basis-1/5" style={{ minWidth:
'65%' }}>
<div className="px-6 py-4">
<h1 className="text-3xl mb-2 font-bold text-white"> Product Catalog App
</h1>
<p className="text-gray-700 text-white">
by - <b style={{ color: 'orange' }}>Design Shubham, Development
Abraham</b>
</p>
<div className="py-10">
{ (Categories) ? <p className='text-white'>Tags : </p> : ''}
{
Categories.map(tag => <button key={tag} className="inline-block bg-
amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
onClick={()=>{handleClick(tag)}}>{tag}</button>)
}
</div>
<div className="py-10">
<input type="search" value={query} onChange={handleChange} />
<button onClick={()=>{goToCheckout()}}>Checkout</button>
</div>
</div>
</div>
<div className="ml-5 p-10 xl:basis-4/5">
{console.log("Before render :",Products.length,ProductsCategory.length)}
{render_products(ProductsCategory)}
</div>
</div>
);
}

export default App;