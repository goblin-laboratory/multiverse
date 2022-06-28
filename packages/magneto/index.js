import dotenv from "dotenv";
import logger from "./utils/logger.js";
import { initMongoClient, closeMongoClient } from "./utils/mongoDB.js";

dotenv.config();
logger.info(`MONGODB_URI: ${process.env.MONGODB_URI}`);

if (process.env.MONGODB_URI) {
  initMongoClient(process.env.MONGODB_URI).then((client) => {
    closeMongoClient();
  });
} else {
  throw new Error("MONGODB_URI is not defined");
}
