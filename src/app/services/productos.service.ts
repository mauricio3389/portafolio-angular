import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ResolveEnd } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public productos: Producto[];
  public cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos() {
    this.http.get('https://porfolio-b2337.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[])  => {
        this.productos = resp;
        this.cargando = false;
      });
  }
}
