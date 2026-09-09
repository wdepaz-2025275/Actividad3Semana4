import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../models/producto.model';
import { SubtotalPipe } from '../../pipes/subtotal.pipe';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, SubtotalPipe],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  itemsCarrito: Producto[] = [];

  constructor(
    private carritoService: CarritoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe(datos => {
      this.itemsCarrito = datos;
      this.cdr.detectChanges(); // Forzar la actualización visual
    });
  }

  cambiarCantidad(id: number, event: any): void {
    const cantidad = Number(event.target.value);
    this.carritoService.actualizarCantidad(id, cantidad);
  }

  quitar(id: number): void {
    this.carritoService.eliminarProducto(id);
  }

  calcularTotal(): number {
    return this.itemsCarrito.reduce((acc, p) => acc + (p.precio * (p.cantidad || 1)), 0);
  }
}