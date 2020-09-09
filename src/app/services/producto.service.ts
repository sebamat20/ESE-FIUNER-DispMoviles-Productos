import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public carrito: Array<Producto> = []

  constructor(private httpClient:HttpClient) { }
  
  public obtenerTodos () {
      return this.httpClient.get<Producto[]>("http://localhost:3000/productos");
  }

  public obtenerPorId(id: string) {
    return this.httpClient.get<Producto>("http://localhost:3000/productos/"+id);
  }

  public agregar(prod: Producto) {
    /*this.productos.push(prod);*/
  }
}