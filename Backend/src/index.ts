import express from 'express';
import cors from 'cors';
import { obtenerProductos, validarProducto } from './controllers/carrito.controller';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rutas de la API
app.get('/api/productos', obtenerProductos);
app.post('/api/validar-producto', validarProducto);

app.listen(3000, () => {
    console.log("Backend ejecutándose en http://localhost:3000");
});