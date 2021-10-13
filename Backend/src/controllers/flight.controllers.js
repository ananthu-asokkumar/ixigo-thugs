const express = require("express");
const router = express.Router();

const Flight = require("../models/flight.model");


router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const flight1 = await Flight.create(req.body);
    return res.send(flight1);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    console.log(req.body);
    const flight = await Flight.find().lean().exec();
    return res.send(flight);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.body);
    const flight = await Flight.findById(req.params.id).lean().exec();
    return res.send(flight);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.patch("/:id", async function (req, res) {
  try {
    const update = await Flight.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(update);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// delete the flights from the database

router.delete("/:id", async function (req, res) {
  try {
    const remove = await Flight.findByIdAndDelete(req.params.id);
    return res.status(204).send(remove);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});
module.exports = router;