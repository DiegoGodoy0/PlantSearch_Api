const express = require("express");
const app = express();
const PORT = 3000;

// Para poder leer JSON en requests
app.use(express.json());

// Endpoint raíz
app.get("/", (req, res) => {
  res.send("Bienvenido a mi API en Node.js 🚀");
});

// Ejemplo: obtener todas las plantas
app.get("/plantas", (req, res) => {
  const plantas = [
    { id: 1, nombre: "Rosa", tipo: "Flor" },
    { id: 2, nombre: "Cactus", tipo: "Suculenta" },
  ];
  res.json(plantas);
});

// Ejemplo: crear una planta
app.post("/plantas", (req, res) => {
  const nuevaPlanta = req.body;
  res.status(201).json({
    mensaje: "Planta creada exitosamente",
    planta: nuevaPlanta,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
