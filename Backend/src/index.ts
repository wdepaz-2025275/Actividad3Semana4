import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(express.json());

const catalogo = [
  { id: 1, nombre: 'Laptop Dell', precio: 4500, cantidad: 1 },
  { id: 2, nombre: 'Mouse Inalámbrico', precio: 150, cantidad: 1 },
  { id: 3, nombre: 'Teclado Mecánico', precio: 350, cantidad: 1 },
    { id: 4, nombre: 'Bocinas Bluetooth', precio: 250, cantidad: 1 },
    { id: 5, nombre: 'Mouse pad', precio: 50, cantidad: 1 },
    { id: 6, nombre: 'Camaras para PC', precio: 100, cantidad: 1 }
];

app.get('/api/productos', (req, res) => {
  res.json(catalogo);
});

app.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en http://localhost:${PORT}`);
});