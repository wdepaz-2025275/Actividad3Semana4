import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  productosDisponibles: Producto[] = [];

  constructor(
    private carritoService: CarritoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carritoService.obtenerCatalogo().subscribe({
      next: (data) => {
        this.productosDisponibles = data;
        this.cdr.detectChanges(); // Notifica a la vista que los datos ya llegaron
      },
      error: (err) => console.error('Error al conectar con la API backend:', err)
    });
  }

  agregar(producto: Producto): void {
    this.carritoService.agregarProducto(producto);
  }
}