import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura: number;

  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor(){
    this.autor = {
      nombre: "Sara Rodriguez",
      website: "saraweb.es",
      youtube: "Sara Rodriguez NET"
    };
  }

  ngOnInit(): void {
    $(".galeria").bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.anchura,
      pause: 2000,
      auto: true
    });
  }

  lanzar(event){
    // console.log(event);
    this.conseguirAutor.emit(this.autor);
  }

}
