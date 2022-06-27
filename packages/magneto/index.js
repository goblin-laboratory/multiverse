import dotenv from "dotenv";
import logger from './utils/logger.js';
import MongoDB from "./lib/MongoDB.js";


dotenv.config();
logger.info(`MONGODB_URI: ${process.env.MONGODB_URI}`);

if (process.env.MONGODB_URI) {
  MongoDB.getInstance(process.env.MONGODB_URI);
  MongoDB.getInstance(process.env.MONGODB_URI);
} else {
  throw new Error("MONGODB_URI is not defined");
}
