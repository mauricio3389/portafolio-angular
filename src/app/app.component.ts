import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    serviceInfo: InfoPaginaService,
    serviceProducto: ProductosService,
   ) { }
}
