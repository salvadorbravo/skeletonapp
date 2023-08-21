import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {

  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }>

  constructor() {
    this.entradas = [];
    this.cargarEntradas();
  }

  ngOnInit() {
  }

  cargarEntradas() {
    const entradaString = localStorage.getItem('entradas');
    if(entradaString) {
      this.entradas = JSON.parse(entradaString);
      this.entradas.sort((item1, item2) => {
        if(item1.fecha < item2.fecha) return 1;
        if(item1.fecha > item2.fecha) return -1;
        return 0;
      });
    } else {
      this.entradas = [];
    }
  }

}
