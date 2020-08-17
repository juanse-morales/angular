import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  cursos:string[] = ['HTML','ANGULAR','PHP'];
  animales:Array<any> = [
    {tipo:'Perro', nombre:'Lisa', edad:10},
    {tipo:'Gato', nombre:'Pepon', edad:2},
    {tipo:'Pato', nombre:'TanTan', edad:7}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
