import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
  try {
    await mongoose
      .connect(config.mongo_uri as string)
      .then(() => console.log("Connected to database"))
      .catch((err) => console.log("DB Connection Error", err));

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
