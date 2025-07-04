import mongoose from "mongoose";
import { DATABASE_URL } from "./env";

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "event-db",
    });

    console.log("Database Status: Connected");
  } catch (error) {
    console.error(`Database Status: ${error}`);
  }
};

export default connect;
