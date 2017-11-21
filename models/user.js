const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        // required: true
    },
    middleinitial: String,
    lastname: {
        type: String,
        // required: true
    },
    address: {
        type: String,
        // required: true
    },
    city:{
        type: String,
        // required: true
    },
    zip:{
      type: Number,
    //   required: true
    },
    email:{
      type: String,
    //   required: true
    },
    phone:{
      type: Number,
    //   required: true
    },
    nameoncard:{
      type: String,
    //   required: true
    },
    cardnum:{
      type: Number,
    //   required: true
    },
    cvv:{
      type: Number,
    //   required: true
    }
});

module.exports = mongoose.model("User", UserSchema);
