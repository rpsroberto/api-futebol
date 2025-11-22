import React, { useEffect, useState } from 'react';
import { listarClubes, excluirClube } from '../services/api';
import ClubCard from '../components/ClubCard';

export default function Home(){
  const [clubes, setClubes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function load(){
    setLoading(true);
    try {
      const data = await listarClubes();
      setClubes(data || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function handleDelete(id){
    if(!confirm('Deseja excluir este clube?')) return;
    try {
      await excluirClube(id);
      setClubes(prev => prev.filter(c => c.id !== id));
    } catch (err){
      alert('Erro ao excluir: ' + (err?.data?.error || err?.data || err?.message || 'Erro'));
    }
  }

  return (
    <div>
      <h2>Clubes</h2>
      {loading && <div>Carregando...</div>}
      {error && <div style={{color:'red'}}>Erro ao carregar clubes.</div>}
      <div className="grid">
        {!loading && clubes.length === 0 && <div className="card">Nenhum clube encontrado.</div>}
        {clubes.map(c => <ClubCard key={c.id} club={c} onDelete={handleDelete} />)}
      </div>
    </div>
  );
}
