export default {
  development: {
    port: 3000,
    mongodb_uri: "mongodb://tokplay-mongo:27017/tokplaydb",
    corsHeader: ["Link", "Content-Disposition"],
    corsOrigin: "*",
  },
};
