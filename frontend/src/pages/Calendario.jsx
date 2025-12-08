import React, { useState, useEffect } from "react";

export default function Calendario() {
  const hoy = new Date().toLocaleDateString();
  const [evento, setEvento] = useState("");
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("eventos")) || [];
    setEventos(data);
  }, []);

  const agregarEvento = () => {
    if (!evento.trim()) return;

    const nuevo = {
      id: Date.now(),
      fecha: hoy,
      texto: evento
    };

    const nuevos = [...eventos, nuevo];
    setEventos(nuevos);
    localStorage.setItem("eventos", JSON.stringify(nuevos));
    setEvento("");
  };

  return (
    <div>
      <h2>Calendario</h2>
      <p>Hoy es: <b>{hoy}</b></p>

      <input
        value={evento}
        onChange={e => setEvento(e.target.value)}
        placeholder="Evento de hoy..."
      />
      <button onClick={agregarEvento}>Agregar</button>

      <ul>
        {eventos.map(e => (
          <li key={e.id}>
            {e.fecha} - {e.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
