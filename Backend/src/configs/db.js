const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://ixigo:Y7!gVG2hU5HpJQ.@cluster0.yezjw.mongodb.net/ixigo?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};

module.exports = connect;
// password Y7!gVG2hU5HpJQ.


///mongodb+srv://ixigo:Y7!gVG2hU5HpJQ.@cluster0.yezjw.mongodb.net/ixigo?retryWrites=true&w=majority