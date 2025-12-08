const API_BASE = "https://agenda-app-4iqk.onrender.com/api";

// ✅ OBTENER TAREAS
export async function getTareas() {
  const res = await fetch(`${API_BASE}/tareas`);
  return res.json();
}

// ✅ CREAR TAREA
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

// ✅ ELIMINAR TAREA
export async function eliminarTarea(id) {
  const res = await fetch(`${API_BASE}/tareas/${id}`, {
    method: "DELETE",
  });

  return res.json();
}

// ✅ ACTUALIZAR TAREA (ESTA ES LA QUE FALTABA)
export async function actualizarTarea(id, data) {
  const res = await fetch(`${API_BASE}/tareas/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

