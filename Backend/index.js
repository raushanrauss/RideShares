const express = require("express");

const { sequelize } = require("./config/sequelize");
const userSchema = require("./Modal/userSchema");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Getting Data");
});
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const createUser = await userSchema.create({ name, email, password });
    res.status(201).send({ error: false, items: createUser });
  } catch (err) {
    console.log(err);
  }
});
app.listen(3000, async () => {
  await sequelize.authenticate();
  console.log("Database Connected!");
  console.log(`Server is running at 3000`);
});
