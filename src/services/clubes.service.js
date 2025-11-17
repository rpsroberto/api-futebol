import { supabase } from "../config/supabase.js";

export async function listarClubes() {
  const { data, error } = await supabase.from("clubes").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function buscarClube(id) {
  const { data, error } = await supabase
    .from("clubes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Clube não encontrado");
  return data;
}

export async function criarClube(body) {
  const { data, error } = await supabase
    .from("clubes")
    .insert(body)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function atualizarClube(id, body) {
  const { data, error } = await supabase
    .from("clubes")
    .update(body)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function excluirClube(id) {
  const { error } = await supabase
    .from("clubes")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
}
