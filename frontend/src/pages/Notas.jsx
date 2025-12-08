import React, { useState, useEffect } from "react";

export default function Notas() {
  const [nota, setNota] = useState("");

  useEffect(() => {
    const guardada = localStorage.getItem("nota");
    if (guardada) setNota(guardada);
  }, []);

  const guardar = () => {
    localStorage.setItem("nota", nota);
    alert("Nota guardada ✅");
  };

  return (
    <div>
      <h2>Notas</h2>

      <textarea
        rows="10"
        cols="40"
        value={nota}
        onChange={e => setNota(e.target.value)}
        placeholder="Escribe tus notas aquí..."
      />

      <br />
      <button onClick={guardar}>Guardar Nota</button>
    </div>
  );
}

