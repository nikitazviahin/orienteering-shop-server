require('dotenv').config()
import express from "express";
import db from "./db";

const port = process.env.PORT || 5000;
const app = express();

const start = async () => {
  try {
    await db.authenticate();
    await db.sync();
    app.listen(port, () => console.log(`Running on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();

app.get("/", (_, res) => {
  res.status(200).send("hello");
});
