import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductos } from '../iproductos';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<IProductos[]> {
    return this.http.get<IProductos[]>(`${this.apiUrl}/isNewProductAdded`);
  }

  getProductoCount(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/countProductInDiscount`);
  }

  addProducto(producto: IProductos): Observable<any> {
    return this.http.post(`${this.apiUrl}/addProduct`, producto);
  }
}


