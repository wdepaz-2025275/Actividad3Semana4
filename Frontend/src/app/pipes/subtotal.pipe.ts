import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto.model';

@Pipe({
  name: 'subtotal',
  standalone: true
})
export class SubtotalPipe implements PipeTransform {
  transform(producto: Producto): number {
    if (!producto) return 0;
    return (producto.precio || 0) * (producto.cantidad || 1);
  }
}