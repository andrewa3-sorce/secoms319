const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { find } = require("./dataSchema");
const app = express();
const Product = require("./dataSchema.js");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/reactdata", {
  dbName: "reactdata",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const port = process.env.PORT || 4001;
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
  const query = { id: id };
  const oneProduct = await Product.findOne(query);
  console.log(oneProduct);
  resp.send(oneProduct);
});

app.get("/:catagory", async (req, resp) => {
  const catagory = req.params.catagory;
});

app.delete("/delete", async (req, res) => {
  console.log("Delete :", req.body);
  try {
    const query = { id: req.body.id };
    await Product.deleteOne(query);
    console.log("deleted------");
    const messageResponse = {
      message: `Product ${req.body.id} deleted correctly`,
    };
    res.send(JSON.stringify(messageResponse));
  } catch (err) {
    console.log("Error while deleting :" + p_id + " " + err);
  }
});

app.put("/:id", async (req, resp) => {
  const id = req.params.id;
  const price = req.body.price;
  const updateResult = await Product.updateOne(
    { id: req.params.id },
    { $set: { price: req.body.price } }
  );
  console.log("updated item " + id + "'s price to " + price);
  resp.send("updated item " + id + "'s price to " + price);
});

app.use(bodyParser.json());

app.post("/insert", async (req, res) => {
  console.log(req.body);
  const p_id = req.body.id;
  const ptitle = req.body.title;
  const pprice = req.body.price;
  const pdescription = req.body.description;
  const pcategory = req.body.category;
  const pimage = req.body.image;
  const pyear = req.body.year;
  const pwebsiteLink = req.body.websiteLink;
  const pbuyLink = req.body.buyLink;

  const formData = new Product({
    id: p_id,
    title: ptitle,
    price: pprice,
    description: pdescription,
    category: pcategory,
    image: pimage,
    websiteLink: pwebsiteLink,
    buyLink: pbuyLink,
    year: pyear,
  });
  try {
    // await formData.save();
    await Product.create(formData);
    const messageResponse = { message: `Product ${p_id} added correctly` };
    res.send(JSON.stringify(messageResponse));
  } catch (err) {
    console.log("Error while adding a new product:" + err);
  }
});
