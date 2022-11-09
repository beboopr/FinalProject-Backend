import { MongoClient, ObjectId } from 'mongodb';
import { uri } from './credentials.js';
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const client = new MongoClient(uri);

//connects to DB 'SalesData'
const db = client.db('SalesData');

//retrieves collection movies from DB called SalesData
const moviesCollection = db.collection('products');
 
const query = {
   name: "Fridge",
   brand: "samsung",
   year: "2018",
   location: "Manati",
   address: "J8 monte verde, PR 00674",
   email: "dust37@yahoo.com"
}
 
 
const result = await moviesCollection.insertOne(newMovie);
console.log("Result of insert", result);

// //retrieves one line from DB
// const products = await productssCollection.findOne({});
// console.log(products);

// // limiting image size to 30megabits
// app.use(bodyParser.json({limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());


// const PORT = process.env.PORT || 5000;

// // no requied but to avoid erros
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
// .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false );