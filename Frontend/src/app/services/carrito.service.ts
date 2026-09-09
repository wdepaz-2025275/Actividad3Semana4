import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = 'http://localhost:3000/api/productos'; 

  private itemsCarrito: Producto[] = [];
  private carritoSubject = new BehaviorSubject<Producto[]>([]);
  carrito$ = this.carritoSubject.asObservable();

  constructor(private http: HttpClient) {}

  obtenerCatalogo(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  // Métodos del carrito
  agregarProducto(producto: Producto): void {
    const itemExistente = this.itemsCarrito.find(p => p.id === producto.id);
    if (itemExistente) {
      itemExistente.cantidad = (itemExistente.cantidad || 1) + 1;
    } else {
      this.itemsCarrito.push({ ...producto, cantidad: 1 });
    }
    this.carritoSubject.next(this.itemsCarrito);
  }

  actualizarCantidad(id: number, cantidad: number): void {
    const item = this.itemsCarrito.find(p => p.id === id);
    if (item) {
      item.cantidad = cantidad;
      this.carritoSubject.next(this.itemsCarrito);
    }
  }

  eliminarProducto(id: number): void {
    this.itemsCarrito = this.itemsCarrito.filter(p => p.id !== id);
    this.carritoSubject.next(this.itemsCarrito);
  }
}