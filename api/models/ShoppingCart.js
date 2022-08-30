import moongose from "moongose";

const schema = new moongose.Schema({
    total: {
        type: Number,
        required: true,
        default: 0
    },
    paymentDate: {
        type: Date(),
        required: true,
        default: null
    },
    products: [{
        product: {
            type: moongose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }]
});

export default moongose.model("ShoppingCart", schema);
