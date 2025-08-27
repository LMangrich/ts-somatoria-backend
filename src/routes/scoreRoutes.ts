import { Router } from "express";
import { scoreController } from "../controllers/scoreController";

const scoreRoutes = Router();

scoreRoutes.post("/", scoreController);

scoreRoutes.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

export default scoreRoutes;
