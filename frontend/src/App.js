import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tareas from './pages/Tareas';
import Recordatorios from './pages/Recordatorios';
import Notas from './pages/Notas';
import Calendario from './pages/Calendario';

export default function App() {
  return (
    <div>
      {/* NAVBAR CON ESTILO */}
      <Navbar />

      {/* CONTENEDOR GENERAL */}
      <main className="container">
        <div className="card">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tareas' element={<Tareas />} />
            <Route path='/recordatorios' element={<Recordatorios />} />
            <Route path='/notas' element={<Notas />} />
            <Route path='/calendario' element={<Calendario />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

