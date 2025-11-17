import * as service from "../services/clubes.service.js";
import { clubeSchema } from "../validators/clubes.validator.js";

export default {
  async listar(req, res, next) {
    try {
      const data = await service.listarClubes();
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  async buscar(req, res, next) {
    try {
      const { id } = req.params;
      const data = await service.buscarClube(id);
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  async criar(req, res, next) {
    try {
      const { error } = clubeSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });

      const data = await service.criarClube(req.body);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  },

  async atualizar(req, res, next) {
    try {
      const { id } = req.params;
      const data = await service.atualizarClube(id, req.body);
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  async excluir(req, res, next) {
    try {
      const { id } = req.params;
      await service.excluirClube(id);
      res.json({ message: "Clube removido com sucesso" });
    } catch (err) {
      next(err);
    }
  }
};

