const express = require("express");
const app = express();
const PORT = 5000;
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const mongoose = require("mongoose");
require("dotenv").config();

// データベース接続
mongoose
    .connect(process.env.MONGOURL)
    .then(() => console.log("Connecting to the DB"))
    .catch((e) => console.log(e));

// ミドルウェア
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => console.log("The server has started."));
