const app = require("./app");

require("dotenv").config({ path: "backend/config/config.env" });
const connectDatabase = require("./config/database");

process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");

  process.exit(1);
});

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  });
});
