const express = require("express");
const { router } = require("./Routes/router");
const { connectMongo } = require("./Connection/Connect");

// creating app
const app = express();

// connection of mongo
connectMongo("mongodb://localhost:27017/short-url").then(() => {
  console.log("Connected to MongoDB");
});

// for using data from the body
app.use(express.json());

app.use("/user", router);

app.listen(8081, () => {
  console.log("Listening to the port....");
});
