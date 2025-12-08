import React, { useState, useEffect } from "react";

export default function Recordatorios() {
  const [texto, setTexto] = useState("");
  const [recordatorios, setRecordatorios] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("recordatorios")) || [];
    setRecordatorios(data);
  }, []);

  const agregarRecordatorio = () => {
    if (!texto.trim()) return;

    const nuevo = { id: Date.now(), texto };
    const nuevos = [...recordatorios, nuevo];

    setRecordatorios(nuevos);
    localStorage.setItem("recordatorios", JSON.stringify(nuevos));
    setTexto("");
  };

  const eliminar = (id) => {
    const nuevos = recordatorios.filter(r => r.id !== id);
    setRecordatorios(nuevos);
    localStorage.setItem("recordatorios", JSON.stringify(nuevos));
  };

  return (
    <div>
      <h2>Recordatorios</h2>

      <input
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Nuevo recordatorio..."
      />
      <button onClick={agregarRecordatorio}>Agregar</button>

      <ul>
        {recordatorios.map(r => (
          <li key={r.id}>
            {r.texto}
            <button onClick={() => eliminar(r.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
