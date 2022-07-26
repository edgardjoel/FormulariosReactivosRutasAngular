import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  
  numeroPadre:number=5;
  numeroObtenidoDeHijo!:number;
  constructor() { }
  
  ngOnInit(): void {
  }
  
  setData(e:any){
  this.numeroObtenidoDeHijo=e;
  }
}
