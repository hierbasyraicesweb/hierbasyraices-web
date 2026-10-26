import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Leer el cuerpo de la petición (el término que envía el navegador)
    const body = await request.json();
    const searchTerm = body.search_term;

    // 2. Validar que venga algo y tenga al menos 3 caracteres
    if (!searchTerm || typeof searchTerm !== 'string' || searchTerm.trim().length < 3) {
      return new Response(
        JSON.stringify({ error: 'Término de búsqueda inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Insertar en la tabla failed_searches de Supabase
    const { error } = await supabase
      .from('failed_searches')
      .insert([{ search_term: searchTerm.trim().toLowerCase() }]);

    // 4. Responder al navegador
    if (error) {
      console.error('❌ Error al guardar búsqueda fallida:', error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('✅ Búsqueda fallida guardada en Supabase:', searchTerm);
    return new Response(
      JSON.stringify({ success: true, search_term: searchTerm }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('❌ Error inesperado en el endpoint:', err);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};