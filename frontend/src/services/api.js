const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

async function request(path, opts = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts
  });
  const text = await res.text();
  try {
    const data = JSON.parse(text || '{}');
    if (!res.ok) throw { status: res.status, data };
    return data;
  } catch (err) {
    // se não for JSON
    if (!res.ok) throw { status: res.status, data: text };
    throw err;
  }
}

export function listarClubes() {
  return request('/clubes');
}

export function buscarClube(id) {
  return request(`/clubes/${id}`);
}

export function criarClube(payload) {
  return request('/clubes', { method: 'POST', body: JSON.stringify(payload) });
}

export function atualizarClube(id, payload) {
  return request(`/clubes/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
}

export function excluirClube(id) {
  return request(`/clubes/${id}`, { method: 'DELETE' });
}
