import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public servicio: InfoPaginaService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  buscarProducto( value: string ) {
    if(value.trim().length == 0) {
      return;
    }

    value = value.toLowerCase();

    this.router.navigate(['/search', value]);
  }
}
