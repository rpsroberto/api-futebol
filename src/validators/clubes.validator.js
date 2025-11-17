import Joi from "joi";

export const clubeSchema = Joi.object({
  nome: Joi.string().required(),
  cidade: Joi.string().required(),
  ano_fundacao: Joi.number().min(1800).max(2025),
  titulos_estaduais: Joi.number().min(0)
});
