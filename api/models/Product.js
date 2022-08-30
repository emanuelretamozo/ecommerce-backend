import mongoose from "mongoose";

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
        type: String,
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
            required: true
        },
        description: {
            type: String,
            required: false
        },
       url: {
            type: String,
            required: true
        }
    }
});

export default mongoose.model("Product", schema);
