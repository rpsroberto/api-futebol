import React, { useState } from 'react';
import { criarClube } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function CreateClub(){
  const [form, setForm] = useState({ nome:'', cidade:'', ano_fundacao:'', titulos_estaduais:0 });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    try {
      const body = {
        nome: form.nome,
        cidade: form.cidade,
        ano_fundacao: form.ano_fundacao ? parseInt(form.ano_fundacao) : null,
        titulos_estaduais: parseInt(form.titulos_estaduais || 0)
      };
      await criarClube(body);
      navigate('/');
    } catch (err) {
      alert('Erro ao criar: ' + (err?.data?.error || err?.data || err?.message));
    } finally { setLoading(false); }
  }

  return (
    <div>
      <h2>Criar Clube</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Nome</label>
        <input value={form.nome} onChange={e=>setForm({...form, nome: e.target.value})} required />
        <label>Cidade</label>
        <input value={form.cidade} onChange={e=>setForm({...form, cidade: e.target.value})} required />
        <label>Ano de Fundação</label>
        <input value={form.ano_fundacao} onChange={e=>setForm({...form, ano_fundacao: e.target.value})} />
        <label>Títulos Estaduais</label>
        <input type="number" value={form.titulos_estaduais} onChange={e=>setForm({...form, titulos_estaduais: e.target.value})} />
        <button type="submit" disabled={loading}>{loading? 'Salvando...' : 'Criar'}</button>
      </form>
    </div>
  );
}
