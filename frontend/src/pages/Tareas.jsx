import React, { useEffect, useState } from 'react';
import { fetchTareas, crearTarea, actualizarTarea, eliminarTarea } from '../api';
import TaskCard from '../components/TaskCard';

export default function Tareas(){
  const [tareas, setTareas] = useState([]);
  const [form, setForm] = useState({ titulo:'', fecha:'', descripcion:'', estatus:'pendiente' });

  const load = async () => {
    const data = await fetchTareas();
    setTareas(data);
  };

  useEffect(()=>{ load(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const nueva = await crearTarea({ ...form, fecha: form.fecha });
    setTareas(prev => [...prev, nueva]);
    setForm({ titulo:'', fecha:'', descripcion:'', estatus:'pendiente' });
  };

  const handleDelete = async (id) => {
    await eliminarTarea(id);
    setTareas(prev => prev.filter(t => t._id !== id));
  };

  const handleToggleComplete = async (t) => {
    const newStatus = t.estatus === 'completada' ? 'pendiente' : 'completada';
    const updated = await actualizarTarea(t._id, { ...t, estatus: newStatus });
    setTareas(prev => prev.map(p => p._id === t._id ? updated : p));
  };

  return (
    <div>
      <h2>Tareas</h2>

      <form onSubmit={handleCreate} style={{ marginBottom:16 }}>
        <input required placeholder="Título" value={form.titulo} onChange={e=>setForm({...form, titulo:e.target.value})} />
        <input required type="date" value={form.fecha} onChange={e=>setForm({...form, fecha:e.target.value})} />
        <input placeholder="Descripción" value={form.descripcion} onChange={e=>setForm({...form, descripcion:e.target.value})} />
        <select value={form.estatus} onChange={e=>setForm({...form, estatus:e.target.value})}>
          <option value="pendiente">Pendiente</option>
          <option value="en progreso">En progreso</option>
          <option value="completada">Completada</option>
        </select>
        <button type="submit">Agregar</button>
      </form>

      <div style={{ display:'grid', gap:8 }}>
        {tareas.map(t => (
          <TaskCard key={t._id} tarea={t} onDelete={()=>handleDelete(t._id)} onToggle={()=>handleToggleComplete(t)} />
        ))}
      </div>
    </div>
  );
}
