import mongoose from "mongoose";

export const connectToMongoDb = (uri) => {
  mongoose.connect(uri);

  const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("database connected");
  });
};
