import mongoose from "mongoose";

const schema = new mongoose.Schema({
    client: {
        type: String,
        required: true,
    },
    shoppingCart: {
        products: {
            type: Array,
            product: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            unique: true
        }
    }
});

export default mongoose.model("Sales", schema);
