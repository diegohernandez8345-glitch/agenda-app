//const API_BASE = process.env.REACT_APP_API_URL || 'https://agenda-app-4iqk.onrender.com';
const API_BASE = "https://agenda-app-4iqk.onrender.com/api";

// Obtener tareas
export async function getTareas() {
  const res = await fetch(`${API_BASE}/tareas`);
  return res.json();
}

// Crear tarea
export async function crearTarea(data) {
  const res = await fetch(`${API_BASE}/tareas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
