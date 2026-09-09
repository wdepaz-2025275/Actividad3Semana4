import { Component } from '@angular/core';
import { ProductosComponent } from './components/productos/productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductosComponent, CarritoComponent],
  templateUrl: './app.html'
})
export class App {
  title = 'Frontend';
}