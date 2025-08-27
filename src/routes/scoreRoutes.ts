import { Router } from "express";
import { scoreControler } from "../controllers/scoreController";

const scoreRoutes = Router();

scoreRoutes.post("/", scoreControler);

export default scoreRoutes;
