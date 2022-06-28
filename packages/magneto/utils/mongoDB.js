import { MongoClient } from "mongodb";
import logger from "./logger.js";

let client = null;

// this.client = await MongoClient.connect(this.uri);

export async function initMongoClient(uri) {
  if (!client) {
    try {
      client = await MongoClient.connect(uri);
    } catch (errMsg) {
      debugger;
      logger.error(
        `initMongoClient faild, MONGODB_URI ${uri}, errMsg: ${errMsg}`
      );
    }
  }
  logger.info(`MongoClient initialized`);
  return client;
}

export function closeMongoClient() {
  if (client) {
    client.close().catch((errMsg) => {
      debugger;
      logger.error(`closeMongoClient faild, ${errMsg}`);
    });
    client = null;
  }
}
