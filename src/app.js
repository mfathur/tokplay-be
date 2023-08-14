import express from "express";
import cors from "cors";
import configObj from "./config/index.js";
import { connectToMongoDb } from "./config/db.js";
import { errorHandler } from "./utils/errorHandler.js";
import { errorLogger } from "./utils/errorLogger.js";
import apis from "./apis/index.js";

const config = configObj[process.env.NODE_ENV];

connectToMongoDb(config.mongodb_uri);

const app = express();

app.options("*", cors());
app.use(
  cors({
    origin: config.corsOrigin,
    exposedHeaders: config.corsHeader,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "Hello from Tokopedia Play Clone Server",
  });
});

apis(app);

app.use(errorLogger);
app.use(errorHandler);

const PORT = config.port || process.env.NODE_PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
