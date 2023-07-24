import videoRouter from "./videos/routes/index.js";

export default (app) => {
  app.use("/videos", videoRouter);
};
