import React from 'react';
import { Link } from 'react-router-dom';

export default function ClubCard({ club, onDelete }){
  return (
    <div className="card">
      <h3>{club.nome}</h3>
      <p className="small">Cidade: {club.cidade}</p>
      <p className="small">Fundação: {club.ano_fundacao || '—'}</p>
      <p className="small">Títulos: {club.titulos_estaduais ?? 0}</p>
      <div style={{marginTop:10, display:'flex', gap:8}}>
        <Link to={`/edit/${club.id}`} style={{textDecoration:'none', padding:'6px 8px', borderRadius:6, background:'#e6eefc', color:'#0f62fe'}}>Editar</Link>
        <button onClick={() => onDelete(club.id)} style={{padding:'6px 8px', borderRadius:6, background:'#ffe9e9', border:'none', cursor:'pointer'}}>Excluir</button>
      </div>
    </div>
  );
}
