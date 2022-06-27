import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
// dotenv.config();
// console.log(process.env);
// const uri =
//   "mongodb://admin:123456@192.168.2.6:27017?retryWrites=true&writeConcern=majority";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("sample_mflix");
//     const movies = database.collection("movies");
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: "Back to the Future" };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

class MongoDB {
  static instance = null;
  static getInstance(uri) {
    if (!MongoDB.instance) {
      MongoDB.instance = new MongoDB(uri);
    }
    return MongoDB.instance;
  }
  constructor(uri) {
    this.uri = uri;
  }
  async connect() {
    this.client = await MongoClient.connect(this.uri);
    this.database = this.client.db("sample_mflix");
  }
  async disconnect() {
    await this.client.close();
  }
  // async findOne(collection, query) {
  //   const collection = this.database.collection(collection);
  //   return await collection.findOne(query);
  // }
}

export default MongoDB;
