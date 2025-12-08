require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tareasRouter = require('./routes/tareas');

const app = express();

// ✅ CORS PROFESIONAL Y SIN ERROR DE BARRA FINAL
app.use(cors({
  origin: [
    "https://agendabd.netlify.app",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use('/api/tareas', tareasRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Agenda backend activo' });
});

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conectado a MongoDB');
  app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
  });
})
.catch(err => {
  console.error('Error al conectar MongoDB:', err.message);
  process.exit(1);
});

