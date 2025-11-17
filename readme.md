# ⚽ API de Futebol Cearense – CRUD + Supabase + Render

Esta é uma API simples desenvolvida em **Node.js + Express**, utilizando **Supabase** como autenticação e banco de dados, e hospedada no **Render**.

O projeto implementa um CRUD completo para gerenciar **clubes de futebol cearense**, permitindo:

* Criar clubes
* Listar clubes
* Buscar clube por ID
* Atualizar clube
* Excluir clube

---

## 🚀 Tecnologias utilizadas

* **Node.js**
* **Express**
* **Supabase (auth + banco de dados Postgres)**
* **Render (deploy da API)**

---

## 📁 Estrutura do Projeto

```
api-futebol/
│── package.json
│── server.js
│── .env (local)
│── README.md
└── src/
    ├── config/
    │   └── supabase.js
    ├── routes/
    │   └── clubes.js
    └── controllers/
        └── clubesController.js
```

---

## 🛠️ Configuração do Supabase

1. Entre em **[https://supabase.com](https://supabase.com)**
2. Crie um projeto
3. Copie suas chaves:

   * **Project URL**
   * **anon public key**
4. Crie uma tabela chamada **clubes**:

```sql
create extension if not exists "pgcrypto";

create table clubes (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  cidade text not null,
  serie text,
  fundacao int,
  created_at timestamp default now()
);
```

---

## 🔧 Configuração local

### 1. Instalar dependências

```bash
npm install
```

### 2. Criar arquivo `.env`

```
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_KEY=SUA_PUBLIC_ANON_KEY
PORT=3000
```

### 3. Rodar localmente

```bash
npm start
```

---

## 📌 Rotas da API

### ▶️ Listar clubes

`GET /clubes`

### ▶️ Buscar clube por ID

`GET /clubes/:id`

### ▶️ Criar clube

`POST /clubes`

```json
{
  "nome": "Guarani de Juazeiro",
  "cidade": "Juazeiro do Norte",
  "serie": "B",
  "fundacao": 1946
}
```

### ▶️ Atualizar clube

`PUT /clubes/:id`

### ▶️ Excluir clube

`DELETE /clubes/:id`

---

## 🌐 Deploy no Render

1. Vá para **[https://render.com](https://render.com)**
2. Criar um novo **Web Service**
3. Conectar o repositório do GitHub
4. Build Command:

```
npm install
```

5. Start Command:

```
npm start
```

6. Em **Environment Variables**, adicionar:

```
SUPABASE_URL=...
SUPABASE_KEY=...
```

7. Deploy 🎉

---

## ✔️ Status do Projeto

API funcionando com:

* CRUD completo
* Supabase conectado
* Deploy funcionando

