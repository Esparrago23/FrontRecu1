import { Component,OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { IProductos } from '../iproductos';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  productos: IProductos[] = [];
  count: number = 0;
  nuevoProducto: IProductos = { nombre: '', precio: 0, codigo: '', descuento: false };

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerContador();
  }

  obtenerProductos() {
    setInterval(() => {
      this.productosService.getProductos().subscribe(data => this.productos = data);
    }, 5000);
  }

  obtenerContador() {
    const poll = () => {
      this.productosService.getProductoCount().subscribe(
        data => {
          this.count = data.cantidad;
          poll();
        },
        error => setTimeout(poll, 1000)
      );
    };
    poll();
  }

  agregarProducto() {
    this.productosService.addProducto(this.nuevoProducto).subscribe(() => {
      this.nuevoProducto = { nombre: '', precio: 0, codigo: '', descuento: false };
    });
  }
}
