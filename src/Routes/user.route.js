const express=require("express");
const router=express.Router();

const userController=require("../Controller/user.controller");

router.get("/",userController.getAllUsers);
router.get("/profile",userController.getUserProfile);

module.exports=router;