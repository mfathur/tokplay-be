import express from "express";
import configObj from "./config/index.js";

const app = express();

const config = configObj[process.env.NODE_ENV];

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
