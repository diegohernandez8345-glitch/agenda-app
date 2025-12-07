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

// Eliminar tarea
export async function eliminarTarea(id) {
  const res = await fetch(`${API_BASE}/tareas/${id}`, {
    method: "DELETE",
  });

  return res.json();
}


