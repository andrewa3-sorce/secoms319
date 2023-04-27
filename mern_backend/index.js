const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { find } = require("./dataSchema");
const app = express();
const Product = require("./dataSchema");

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/reactdata", {
  dbName: "reactdata",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const port = process.env.PORT || 4000;
const host = "localhost";
app.listen(port, () => {
  console.log(`App listening at http://%s:%s`, host, port);
});

app.get("/", async (req, resp) => {
  const query = {};
  const allProducts = await Product.find(query);
  console.log(allProducts);
  resp.send(allProducts);
});

app.get("/:id", async (req, resp) => {
  const id = req.params.id;
  const query = { _id: id };
  const oneProduct = await Product.findOne(query);
  console.log(oneProduct);
  resp.send(oneProduct);
});

app.delete("/:id", async (req, resp) => {
  const id = req.params.id;
  const query = { _id: id };
  Product.deleteOne(query);
  console.log("deleted item " + id);
  resp.send("delelted " + id + "!");
});

app.put("/:id/:price", async (req, resp) => {
  const id = req.params.id;
  const price = req.params.price;

  Product.updateOne(id, price);
  console.log("updated item " + id + "'s price to " + price);
  resp.send("updated item " + id + "'s price to " + price);
});

app.use(bodyParser.json());

app.post("/create", async (req, resp) => {
  const params = req.body;

  Product.create(params);
  console.log(params);
  resp.send("success");
});
