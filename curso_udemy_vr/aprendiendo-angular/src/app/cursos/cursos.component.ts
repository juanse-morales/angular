import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombres;
      // this.nombre = params['nombre'];
      //console.log(this.nombre);
      this.followers = +params.followers; // El + delante lo convierte a tipo numerico.
    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
