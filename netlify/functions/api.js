import express, { Router } from "express";
import serverless from "serverless-http";
import leetRoute from "./leetcode.js";
import cors from "cors";
const api = express();
api.use(cors());
const port = process.env.PORT || 3000;
const router = Router();

router.get("/", (req, res) => {
  res.send({ res: "home" });
});

router.get("/hello", (req, res) => {
  res.send({ res: "hellow world" });
});

api.use("/.netlify/functions/api", router);
api.use("/.netlify/functions/api/leet", leetRoute);

export const handler = serverless(api);
