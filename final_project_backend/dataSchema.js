const mongoose = require("mongoose");
const ReactFormDataSchema = new mongoose.Schema(
  {
    id: { type: Number },
    title: { type: String },
    price: { type: String },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    year: { type: String },
  },
  { collection: "game_catalog" }
);
const Product = mongoose.model("Product", ReactFormDataSchema);
module.exports = Product;
