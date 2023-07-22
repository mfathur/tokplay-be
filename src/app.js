import express from "express";

const app = express();
const PORT = process.env.NODE_PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "Hello from Tokopedia Play Clone Server",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening to PORT ${PORT}`);
});
