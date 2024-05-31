const express = require("express");

const { sequelize } = require("./config/sequelize");
const userSchema = require("./Modal/userSchema");
const userRouter = require("./Routes/userRouter");
const app = express();
app.use(express.json());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Getting Data");
});
app.use('/user',userRouter);
app.listen(3000, async () => {
  await sequelize.authenticate();
  console.log("Database Connected!");
  console.log(`Server is running at 3000`);
});
