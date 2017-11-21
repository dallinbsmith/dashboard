const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = process.env.PORT || 9010;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/users", require("./routes/users"));


mongoose.connect(
    "mongodb://localhost/users",
    { keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true },
    err => {
        if (err) return err;
        console.log("Connected to the blytz database");
    }
)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
