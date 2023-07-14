import mongoose from "mongoose";

//This is Main User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 25,
    minlength: 2,
    required: false,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  phone: {
    type: String,
    required: false,
  },
});

const userModel = new mongoose.model("Users", userSchema, "users");

export default userModel;
