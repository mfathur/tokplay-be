import express from "express";
import configObj from "./config/index.js";
import { connectToMongoDb } from "./config/db.js";

const config = configObj[process.env.NODE_ENV];

connectToMongoDb(config.mongodb_uri);

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "Hello from Tokopedia Play Clone Server",
  });
});

const PORT = process.env.NODE_PORT || config.port;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
