import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Personajes,Result } from '../interfaces/personajes.interface';
import {  Observable } from 'rxjs';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  
  private baseUrl:string= environment.baseUrl;
 
  constructor(private http:HttpClient) { }
  
  getPersonajes():Observable<Result[]>{
    const url= `${this.baseUrl}/character`;
    return this.http.get(url)
    .pipe(
      map((respuesta:any)=>{
        let {results}=respuesta
        return  results
      })
    )
  }
  


}
