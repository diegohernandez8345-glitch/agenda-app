const Tarea = require('../models/Tarea');

exports.listar = async (req, res) => {
  try {
    const { estatus, desde, hasta } = req.query;
    const filtro = {};
    if (estatus) filtro.estatus = estatus;
    if (desde || hasta) {
      filtro.fecha = {};
      if (desde) filtro.fecha.$gte = new Date(desde);
      if (hasta) filtro.fecha.$lte = new Date(hasta);
    }
    const tareas = await Tarea.find(filtro).sort({ fecha: 1 });
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.obtener = async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.crear = async (req, res) => {
  try {
    const { titulo, fecha, descripcion, estatus } = req.body;
    const tarea = new Tarea({ titulo, fecha, descripcion, estatus });
    await tarea.save();
    res.status(201).json(tarea);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const tarea = await Tarea.findByIdAndDelete(req.params.id);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
