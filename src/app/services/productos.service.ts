import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ResolveEnd } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public productos: Producto[] = [];
  public cargando = true;
  public productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos() {

    return new Promise( (resolve, reject) => {
      this.http.get('https://porfolio-b2337.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[])  => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      });
    });
  }

  public getProducto(id: string) {
    return this.http.get(`https://porfolio-b2337.firebaseio.com/productos/${ id }.json`);
  }

  public buscarProducto( value: string )
  {
    if(this.productos.length === 0) {
      this.cargarProductos().then( () => {
        this.aplicarFiltro(value);
      });
    } else {
      this.aplicarFiltro(value);
    }
  }

  private aplicarFiltro( value: string ) {
    this.productosFiltrado = [];

    this.productos.forEach(producto => {
      const categoria = producto.categoria.toLowerCase();
      const titulo = producto.titulo.toLowerCase();

      if(categoria.indexOf( value ) >= 0 ||
        titulo.indexOf( value ) >= 0) {
        this.productosFiltrado.push(producto);
      }
    });

  }
}
