const API_BASE = "https://agenda-app-4iqk.onrender.com/api";

export async function getTareas() {
  const res = await fetch(`${API_BASE}/tareas`);
  return res.json();
}

export async function crearTarea(data) {
  const res = await fetch(`${API_BASE}/tareas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

