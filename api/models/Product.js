import mongoose from "mongoose";
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    secure: true
  });

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    description: {
        type: String,
        required: true,
      },
    requirements: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "ProductCategory",
        required: true,
        default: "general"
    },
    unitaryPrice: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    imagery: {
        name: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        CLOUDINARY_URL: {
            type: String,
            required: true
        }
    }
});

export default mongoose.model("Product", schema);
