const mongoose = require('mongoose');

const TareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  fecha: { type: Date, required: true },
  descripcion: { type: String, default: '' },
  estatus: { type: String, enum: ['pendiente','en progreso','completada'], default: 'pendiente' },
  creadoEn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tarea', TareaSchema);
