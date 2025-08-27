import Joi from "joi";

export const scoringInputSchema = Joi.object({
  userTotalSum: Joi.number().integer().min(1).max(99).required(),
  correctTotalSum: Joi.number().integer().min(1).max(99).required(),
  totalQuestionItems: Joi.number().integer().positive().required(),
})