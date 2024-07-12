import express from "express";
import cors from "cors";
import router from "./app/router";
const app = express();

// meddelware use
app.use(express.json());
app.use(cors());

app.use("v1/api/", router)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
