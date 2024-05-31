const express=require('express');
const userSchema = require('../Modal/userSchema');
const userRouter=express.Router()
const bcrypt=require('bcrypt');
userRouter.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username);
    try {
       const saltRound=10;
       const hashedPassword=await bcrypt.hash(password,saltRound);
       console.log(hashedPassword); 
      const createUser = await userSchema.create({ username, email, password:hashedPassword });
      res.status(201).send({ error: false, items: createUser });
    } catch (err) {
      console.log(err);
      res.status(401).send("Invalid input");
    }
  });
  userRouter.get("/data",(req,res)=>{
    res.send("Getting data");
  })



module.exports=userRouter;