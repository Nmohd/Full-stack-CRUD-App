import express from "express";

import userModel from "../../models/Users/index.js";

const router = express.Router();

/*
METHOD : GET
API Endpoint : /api
Body : 
*/

router.get("/", (req, res) => {
  try {
    res.status(200).json({ success: "Router GET is UP yay" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/*
METHOD : GET
API Endpoint : /api/users
Description : Get all users
Body : 
*/

router.get("/users", async (req, res) => {
  try {
    const filter = {};
    const allusers = await userModel.find(filter);

    console.log(allusers);

    res.status(200).json({ success: "Okay", data: allusers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/*
METHOD : POST
API Endpoint : /api/users
Description : Add user
Body : name, email,phone 
*/

router.post("/users", async (req, res) => {
  try {
    let { name, email, phone } = req.body;
    // console.log(req.body);

    const Gotemail = await userModel.findOne({ email });
    if (Gotemail) {
      return res.status(409).json({ error: "Email already exists " });
    }

    let userData = req.body;

    let allUsers = new userModel(userData);
    console.log(allUsers);
    console.log("hello67");

    await allUsers.save();

    res.status(200).json({ success: "User added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/*
METHOD : GET
API Endpoint : /api/users:userId
Description : Get single user details
Body : 
*/

router.get("/users/:userId", async (req, res) => {
  try {
    let singleUser = await userModel.findOne({ _id: req.params.userId });
    if (!singleUser) {
      console.log("user not found");
      res.status(404).json({ error: "User Not Found" });
    }

    res.status(200).json({ success: "Okay", data: singleUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/*
METHOD : Put
API Endpoint : /api/users:userId
Description : Get single user details
Body : 
*/

router.put("/users/:userId", async (req, res) => {
  try {
    let user_id = req.params.userId;
    let { email } = req.body;

    const Gotemail = await userModel.findOne({ email });
    if (Gotemail) {
      return res.status(409).json({ error: "Email already exists " });
    }

    let updateUserDetails = await userModel.updateOne(req.params, {
      $set: req.body,
    });

    res.status(200).json({ success: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/*
METHOD : DELETE
API Endpoint : /api/users:userId
Description : Delete user
Body : 
*/

router.delete("/users/:userId", async (req, res) => {
  try {
    let singleUser = await userModel.deleteOne({ _id: req.params.userId });
    if (!singleUser) {
      console.log("user not found");
      res.status(404).json({ error: "User Not Found" });
    }

    res.status(200).json({ success: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
