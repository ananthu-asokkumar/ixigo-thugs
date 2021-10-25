const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    id:{type:Number,require:true},
    flightName: { type: String, require: true },
    image:{type:String,require:true},
    layover: {type: String, require: false },
    departureTime: {type: String,require: true },
    arrivalTime: {type: String, require: true },
    durationInMin: { type: Number, require: true },
    departurePlace: { type: String, require: true },
    arrivalPlace: { type: String, require: true },
    departureCode: { type: String, require: true },
    arrivalCode:{type:String,require:true},
    departureAirPort: { type: String, require: true },
    arrivalAirport: { type: String, require: true },
    flightCode: { type: String, require: true },
    checkinBaggage: { type: Number, require: true },
    cabinBagagge: { type: Number, require: true },
    basicPrice: { type: Number, require: true },
    arrivalDate: { type: String, require: true },
    departureDate: { type: String, require: true },
    flightStops: { type: String, require: true },
    offPrice: { type: Number, require: false },
    flightClass:{type:String,require:true}
  },
  {
    versionKey: false,
    timestamps:true
  }
);

const Flight = mongoose.model("flight", flightSchema);
module.exports = Flight;
