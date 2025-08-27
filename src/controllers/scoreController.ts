import { Request, Response } from "express";
import { calculateScore } from "../services/scoringService";
import { scoringInputSchema } from "../schema/scoreSchema";
import { ScoringInput } from "../types/scoringTypes";

export function scoreControler(req: Request, res: Response){
    try{
        const {error, value } = scoringInputSchema.validate(req.body, {abortEarly: false})
        
        if (error) {
            return res.status(400).json({ errors: error.details });
        }

        const input: ScoringInput = value;
        const result = calculateScore(input);

        res.json(result)
    } catch(error){
        res.status(400).json({error: (error as Error).message})
    }
} 