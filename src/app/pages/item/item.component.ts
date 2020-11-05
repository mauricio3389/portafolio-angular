import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public producto: ProductoDescripcion = null;
  public id: string;

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( (params: any) => {
        this.id = params['id'];
        this.productoService.getProducto( params['id'] )
          .subscribe( (resp: ProductoDescripcion) => {
            this.producto = resp;
          });
      });
  }

}
