const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

export async function fetchTareas() {
  const res = await fetch(`${API_BASE}/tareas`);
  return res.json();
}

export async function crearTarea(data) {
  const res = await fetch(`${API_BASE}/tareas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function actualizarTarea(id, data) {
  const res = await fetch(`${API_BASE}/tareas/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function eliminarTarea(id) {
  const res = await fetch(`${API_BASE}/tareas/${id}`, { method: 'DELETE' });
  return res.json();
}
