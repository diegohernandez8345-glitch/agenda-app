import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>📒 Mi Agenda</h2>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/tareas">Tareas</Link>
        <Link to="/recordatorios">Recordatorios</Link>
        <Link to="/notas">Notas</Link>
        <Link to="/calendario">Calendario</Link>
      </div>
    </div>
  );
}

