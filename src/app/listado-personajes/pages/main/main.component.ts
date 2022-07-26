import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personajes, Result } from '../../interfaces/personajes.interface';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  personajes:Result[]=[];

  constructor(private http:PersonajesService) { }

  ngOnInit(): void {
    this.http.getPersonajes().subscribe((resultados:Result[]) =>{
    
      // console.log(JSON.stringify(resultados));
      this.personajes=resultados;
      console.log(resultados);
      // resultados
    });
  }

}
