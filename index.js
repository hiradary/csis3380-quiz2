const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = 7000;

// Here's the server URL on render.com: https://csis3380-quiz2-vr9v.onrender.com
// GitHub url: https://github.com/hiradary/csis3380-quiz2

const uri =
  "mongodb+srv://hiradary:mord-paib9hour8LUSS@cluster0.zmtghzr.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    await client.db("Exam").collection("quizes").insertOne({
      name: "Hirad Arshadiyarahmadi",
      sid: "300357303",
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

app.get("/", (req, res) => {
  run().catch(console.dir);
  res.send("Created the collection and insterted data");
});

app.listen(port, () => {
  console.log(`Quiz2 app listening on port ${port}`);
});
