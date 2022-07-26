import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  
  @Input () numeroHijo!: number;
  @Output () numeroDeHijoPadre:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.numeroDeHijoPadre.emit(50)
  }

}
