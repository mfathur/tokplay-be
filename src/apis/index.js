import authRouter from "./auth/routes/index.js";
import videoRouter from "./videos/routes/index.js";
import productRouter from "./products/routes/index.js";

export default (app) => {
  app.use("/auth", authRouter);
  app.use("/videos", videoRouter);
  app.use("/products", productRouter);
};
