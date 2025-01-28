import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const port = process.env.PORT || 3000;

api.get("/", (req, res) => {
  res.send({ res: "success" });
});

export const handler = serverless(api);
