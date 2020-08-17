import { Component } from '@angular/core';

@Component({
  selector: 'prueba',
  templateUrl: './prueba.component.html'
})
export class PruebaComponent{
  public titulo: string;

  constructor(){
    this.titulo = "Componente de prueba"
  }
}