import React from 'react';

export default function TaskCard({ tarea, onDelete, onToggle }){
  return (
    <div style={{
      border:'1px solid #ddd', padding:12, borderRadius:8,
      display:'flex', justifyContent:'space-between', alignItems:'center'
    }}>
      <div>
        <h3 style={{ margin:0 }}>{tarea.titulo} <small>({new Date(tarea.fecha).toLocaleDateString()})</small></h3>
        <p style={{ margin: '6px 0' }}>{tarea.descripcion}</p>
        <small>Estatus: {tarea.estatus}</small>
      </div>
      <div style={{ display:'flex', gap:8 }}>
        <button onClick={onToggle}>{tarea.estatus === 'completada' ? 'Marcar pendiente' : 'Marcar completa'}</button>
        <button onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
}
