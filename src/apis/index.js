import videoRouter from "./videos/routes/index.js";
import productRouter from "./products/routes/index.js";

export default (app) => {
  app.use("/videos", videoRouter);
  app.use("/products", productRouter);
};
