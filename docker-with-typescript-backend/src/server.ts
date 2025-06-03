import dotenv from "dotenv";
import { Server } from "http";
import app from "./app";
import { errorLogger, logger } from "./app/helpers/logger";

dotenv.config({ path: ".env" });

let server: Server;

async function main() {
  try {
    server = app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
      logger.info(`app is listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
    errorLogger.error(err);
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
