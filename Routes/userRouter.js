const express = require("express");

const userRouter = express.Router();
const userController = require("../Controller/userController");
const authController = require("../Controller/authController");

userRouter.post("/signup", authController.signUp);
userRouter.post("/logIn", authController.logIn);

userRouter.route("/createUser").post(userController.createUser);
userRouter.get("/allUsers", authController.protect, userController.getAllUsers);

module.exports = userRouter;
