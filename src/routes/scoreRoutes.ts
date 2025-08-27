import { Router } from "express";
import { scoreController } from "../controllers/scoreController";

const scoreRoutes = Router();

scoreRoutes.post("/", scoreController);

scoreRoutes.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "healthy", 
    message: "Score service is running",
    timestamp: new Date().toISOString()
  });
});

export default scoreRoutes;
