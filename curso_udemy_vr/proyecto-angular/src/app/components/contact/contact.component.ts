import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: number;
  public autor: any;
  @ViewChild('textos', {static:true}) textos;

  constructor() { }

  ngOnInit(): void {
    var opcion_clasica = document.querySelector('#texto').innerHTML;
    //console.log(opcion_clasica);
    //console.log(this.textos);
  }

  ngAfterViewInit():void{
    //console.log(this.textos);
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  getAutor(event){
    this.autor = event;
  }

}
