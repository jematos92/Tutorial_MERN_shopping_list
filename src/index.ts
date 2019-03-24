import express from "express";
import mongoose from "mongoose";
import keys from "../config/keys";
import itemRoutes from "../src/routes/api/items";
const app = express();

//Middleware Conf
app.use(express.json());

//Connect to database
mongoose
  .connect(keys.MongoURI)
  .then(() => {
    console.log("Mongo DB Connected");
  })
  .catch(error => {
    console.log(error);
  });

// uste the environment port if its available otherwise Use 500 in development
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use("/api/items", itemRoutes);
