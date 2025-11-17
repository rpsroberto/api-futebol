import express from "express";
import cors from "cors";
import "dotenv/config";
import clubesRoutes from "./src/routes/clubes.routes.js";
import errorHandler from "./src/middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/clubes", clubesRoutes);

// Rota raiz
app.get("/", (req, res) => {
  res.json({ message: "API Futebol Cearense Online 🚀" });
});

// Middleware de Erros
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
