

const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema(
    {
        firstName: { type: String, require: true },
        lastName: { type: String, require: true },
        email: { type: String, require: true },
        phone: { type: Number, require: true },
        password:{type:String,require:true}

    },
    {
        versionKey: false,
        timestamps:true
    }
)

const Signup = mongoose.model("signup", signupSchema);
module.exports = Signup;