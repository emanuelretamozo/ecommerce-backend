import moongose from "moongose";

const schema = new moongose.Schema({
    total: {
        type: Number,
        required: true,
        default: 0
    },
    paymentDate: {
        type: new Date(),
        required: true,
        default: null
    },
    products: {
        type: Array,
        product: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }
});

export default moongose.model("ShoppingCart", schema);
