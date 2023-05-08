const express = require('express');
const mongoose = require('mongoose');
const Beisbolista = require('./models/beisbolistas');

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/beisbolistas', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a la base de datos');
}).catch((err) => {
  console.log('Error al conectar a la base de datos', err);
});


// Crear una instancia de la aplicación Express
const app = express();
app.use(express.json());

// Rutas de la API
app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

//Ruta de beisbolistas
app.get('/beisbolistas', async (req, res) => {
  try {
    const beisbolistas = await Beisbolista.find();
    res.json(beisbolistas);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor');
  }
});

//buscar beisbolistas

app.get('/beisbolistas/buscar', async (req, res) => {
  try {
    const query = req.query;
    const beisbolistas = await Beisbolista.find(query);
    res.json(beisbolistas);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor');
  }
});

// Modificar un beisbolista existente
app.put('/beisbolistas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBeisbolista = await Beisbolista.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedBeisbolista) {
      const newBeisbolista = new Beisbolista(req.body);
      await newBeisbolista.save();
      res.status(201).json(newBeisbolista);
    } else {
      res.status(200).json(updatedBeisbolista);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor');
  }
});

// Eliminar beisbolistas que cumplan con una condición
app.delete('/beisbolistas', async (req, res) => {
  try {
    const { query } = req;
    const deletedBeisbolistas = await Beisbolista.deleteMany(query);
    if (deletedBeisbolistas.deletedCount === 0) {
      res.status(204).send();
    } else {
      res.status(200).json(deletedBeisbolistas);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor');
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});