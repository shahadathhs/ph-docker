import { Server } from "http";
import app from "./app";

let server: Server;

async function main() {
  try {
    server = app.listen(5000, () => {
      console.log(`app is listening on port 5000`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

process.on("unhandledRejection", (err) => {
  console.log(`😈 Unhandled Rejection is detected , shutting down ... \n`, err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.log(`😈 Uncaught Exception is detected , shutting down ... \n`, err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
