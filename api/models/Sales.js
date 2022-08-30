import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    shoppingCart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ShoppingCart",
        required: true
    },
    date: {
        type: Date(),
        required: true
    },
    coupon: {
        type: String,
        required: false
    },
    
});

export default mongoose.model("Sales", schema);
