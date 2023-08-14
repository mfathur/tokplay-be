export default {
  development: {
    port: 3000,
    mongodb_uri: "mongodb://tokplay-mongo:27017/tokplaydb",
    corsHeader: ["Link", "Content-Disposition"],
    corsOrigin: "*",
  },
  production: {
    port: 80,
    mongodb_uri: process.env.MONGODB_URI,
    corsHeader: ["Link", "Content-Disposition"],
    corsOrigin: /\.vercel\.app/,
  },
};
