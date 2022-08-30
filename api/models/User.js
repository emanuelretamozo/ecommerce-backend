import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address1: [{
    street: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    externalAddresNumber: {
      type: String,
      required: true
    },
    internalAddresNumber: {
      type: String,
      required: false
    },
    addressReference: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    zipCode: {
      type: Number,
      required: true
    },
    references: {
      type: String,
      required: true
    }
  }],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
},
  phone: {
    type: String,
    required: true
  },
  contactReferences: {
    type: String,
    required: false,
    default: " "
  },
  role: {
    type: String,
    enum: ['Manager', 'Client', 'Seller'],
    default: 'Manager',
    required: true,
  }
});

export default mongoose.model("User", schema);
