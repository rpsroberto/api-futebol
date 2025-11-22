// ===============================
// URL base da API
// ===============================
const API_URL = (import.meta.env?.VITE_API_URL || "http://localhost:3000").trim();

console.log("🚀 API_URL carregada pelo frontend:", API_URL);


// ===============================
// Função genérica para requisições
// ===============================
async function request(path, options = {}) {
  const url = `${API_URL}${path}`;
  console.log("🌐 Fazendo requisição para:", url);

  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    const raw = await response.text();

    let data;
    try {
      data = JSON.parse(raw || "{}");
    } catch {
      data = raw;
    }

    if (!response.ok) {
      throw { status: response.status, data };
    }

    return data;

  } catch (error) {
    console.error("❌ ERRO NA REQUISIÇÃO:", error);
    throw error;
  }
}


// ===============================
// Métodos da API (Clubes)
// ===============================
export function listarClubes() {
  return request("/clubes");
}

export function buscarClube(id) {
  return request(`/clubes/${id}`);
}

export function criarClube(payload) {
  return request("/clubes", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function atualizarClube(id, payload) {
  return request(`/clubes/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export function excluirClube(id) {
  return request(`/clubes/${id}`, {
    method: "DELETE",
  });
}
// ===============================
// Fim do arquivo
// ===============================
z
