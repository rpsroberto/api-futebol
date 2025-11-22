import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header className="header">
      <div className="brand">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect width="24" height="24" rx="6" fill="#0f62fe"></rect>
        </svg>
        <div>
          <h1>API Futebol — Frontend</h1>
          <div className="small">Consome API pública (Supabase + Render)</div>
        </div>
      </div>
      <div className="actions">
        <Link to="/create">+ Novo Clube</Link>
      </div>
    </header>
  );
}
