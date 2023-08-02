require("dotenv").config();

const mongoose = require("mongoose");
if (process.env.MG_PASSWORD) {
  mongoose
    .connect(
      `mongodb+srv://rebeca:${process.env.MG_PASSWORD}@cluster0.j7y594m.mongodb.net/Data?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )

    .then(() => console.log("Now connected to MongoDB Cloud Server!"))
    .catch((err) => console.error("Something went wrong", err));
} else {
  console.log("Database does not exist!");
}

module.exports = mongoose;
