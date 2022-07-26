import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    nombre:[ , [Validators.required,Validators.minLength(3)] ],
    edad:[ ,[Validators.required,Validators.min(18)] ],
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      //ES PARA MARCAR TODOS COMO TOCADOS
      this.miFormulario.markAllAsTouched();
       return;
    }
    alert(`Se registro Correctamente tu nombre: ${this.miFormulario.controls['nombre'].value} y edad ${this.miFormulario.controls['edad'].value} correctamente`);
    //console.log(this.miFormulario.value);
    this.miFormulario.reset()
  }
}
