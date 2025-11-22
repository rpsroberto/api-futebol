import React, { useEffect, useState } from 'react';
import { buscarClube, atualizarClube } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditClub(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load(){
      try {
        const data = await buscarClube(id);
        setForm({
          nome: data.nome || '',
          cidade: data.cidade || '',
          ano_fundacao: data.ano_fundacao || '',
          titulos_estaduais: data.titulos_estaduais || 0
        });
      } catch (err) {
        alert('Erro ao buscar clube');
        navigate('/');
      } finally { setLoading(false); }
    }
    load();
  }, [id]);

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await atualizarClube(id, {
        nome: form.nome,
        cidade: form.cidade,
        ano_fundacao: form.ano_fundacao ? parseInt(form.ano_fundacao) : null,
        titulos_estaduais: parseInt(form.titulos_estaduais || 0)
      });
      navigate('/');
    } catch (err) {
      alert('Erro ao atualizar: ' + (err?.data?.error || err?.data || err?.message));
    }
  }

  if(loading) return <div>Carregando...</div>;
  if(!form) return null;

  return (
    <div>
      <h2>Editar Clube</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Nome</label>
        <input value={form.nome} onChange={e=>setForm({...form, nome:e.target.value})} required />
        <label>Cidade</label>
        <input value={form.cidade} onChange={e=>setForm({...form, cidade:e.target.value})} required />
        <label>Ano de Fundação</label>
        <input value={form.ano_fundacao} onChange={e=>setForm({...form, ano_fundacao:e.target.value})} />
        <label>Títulos Estaduais</label>
        <input type="number" value={form.titulos_estaduais} onChange={e=>setForm({...form, titulos_estaduais:e.target.value})} />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
