

const express = require("express");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors())

const connect = require("./configs/db");


const flightController = require("./controllers/flight.controllers");
const signupController=require("./controllers/signup.controllers")


app.use("/flights", flightController);
app.use("./signup", signupController);
// app.set("views", path.join(__dirname, "views/"));


app.listen(5000, async () => {
  await connect();
  console.log("listening to port 5000");
});
