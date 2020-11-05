import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface'
import { Equipo } from 'src/app/interfaces/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: Equipo[];
  cargada = false;

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    } );
   }

   private cargarEquipo() {
    this.http.get('https://porfolio-b2337.firebaseio.com/equipo.json')
    .subscribe( (resp: Equipo[]) => {
      this.cargada = true;
      this.equipo = resp;
      console.log(this.equipo);
    } );
   }
}
