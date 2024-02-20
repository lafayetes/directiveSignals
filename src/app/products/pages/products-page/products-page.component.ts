import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  //Forma tradicional para inyecyar dependencias
 // constructor(private fb:FormBuilder){}

  //Forma nueva para inyectar dependencias
  private fb = inject(FormBuilder)
  public color:string = 'green';

  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(6),Validators.email]]

  })

  changeColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));


  }

}
