export default function errorHandler(err, req, res, next) {
  console.error("❌ ERRO:", err.message);
  res.status(500).json({ error: err.message || "Erro interno do servidor" });
}
