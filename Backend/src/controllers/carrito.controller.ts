import { Request, Response } from 'express';
import { Producto } from '../models/producto.model';

// Catálogo simulado en memoria
const catalogo: Producto[] = [
  { id: 1, nombre: 'Laptop Dell', precio: 4500, cantidad: 1 },
  { id: 2, nombre: 'Mouse Inalámbrico', precio: 150, cantidad: 1 },
  { id: 3, nombre: 'Teclado Mecánico', precio: 350, cantidad: 1 },
  { id: 4, nombre: 'Bocinas Bluetooth', precio: 250, cantidad: 1 },
  { id: 5, nombre: 'Mouse pad', precio: 50, cantidad: 1 },
  { id: 6, nombre: 'Camaras para PC', precio: 100, cantidad: 1 },
];

export const obtenerProductos = (req: Request, res: Response) => {
  res.json(catalogo);
};

export const validarProducto = (req: Request, res: Response): Response => {
  const { nombre, precio, cantidad }: Producto = req.body;

  if (!nombre || typeof nombre !== 'string' || nombre.trim() === '') {
    return res.status(400).json({ error: 'El nombre del producto es obligatorio.' });
  }

  if (precio === undefined || typeof precio !== 'number' || precio <= 0) {
    return res.status(400).json({ error: 'El precio debe ser un número mayor a 0.' });
  }

  if (cantidad === undefined || typeof cantidad !== 'number' || cantidad < 1) {
    return res.status(400).json({ error: 'La cantidad debe ser mínimo 1.' });
  }

  return res.status(200).json({ mensaje: 'Producto válido', producto: req.body });
};