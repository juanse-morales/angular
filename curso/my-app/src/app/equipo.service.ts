import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre: 'Ignacio',
      especialidad: 'HTML',
      descripcion: 'Ignacio ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium, hic ullam velit modi ducimus voluptatum. Distinctio vitae explicabo recusandae dolore iusto similique inventore porro quasi, magnam, tempore nemo dolorem!'
    },
    {
      nombre: 'María',
      especialidad: 'CSS',
      descripcion: 'María ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium, hic ullam velit modi ducimus voluptatum. Distinctio vitae explicabo recusandae dolore iusto similique inventore porro quasi, magnam, tempore nemo dolorem!'
    }
  ]

  constructor() { 
    console.log("Funcionando servicio");
  }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerUno(i){
    return this.equipo[i];
  }
}
