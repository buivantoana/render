import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Product", productSchema);
