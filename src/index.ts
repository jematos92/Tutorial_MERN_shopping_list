import express from "express";
import mongoose from "mongoose";
import itemRoutes from "../src/routes/api/items";
import userRoutes from "../src/routes/api/users";
import authRoutes from "../src/routes/api/auth";

import config from "config";
const app = express();

//Middleware Conf
app.use(express.json());

//Connect to database
mongoose
  .connect(config.get("MongoURI"), {
    useNewUrlParser: true,
    useCreateIndex: true
  })
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
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
