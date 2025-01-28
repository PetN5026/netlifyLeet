import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const port = process.env.PORT || 3000;
const router = Router();

router.get("/", (req, res) => {
  res.send({ res: "home" });
});

router.get("/hello", (req, res) => {
  res.send({ res: "hellow world" });
});

api.use("/api/", router);

export const handler = serverless(api);
