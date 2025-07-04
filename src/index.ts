import express from "express";
import router from "./routes/api";
import bodyParser from "body-parser";
import db from "./utils/db";

const init = async () => {
  try {
    await db();

    const app = express();

    app.use(bodyParser.json());

    const PORT = 3000;

    app.use("/api", router);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {}
};

init();
