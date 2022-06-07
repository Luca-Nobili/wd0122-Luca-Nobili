import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  form!: FormGroup

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nome : new FormControl(null, [Validators.required]),
      alterego : new FormControl(null, [Validators.required]),
      superpotere : new FormArray([]),
      nemico : new FormControl(null, [Validators.required]),
      pianeta : new FormControl(null, [Validators.required]),
      debolezza : new FormControl(null, [Validators.required])
    })
  }

  getFormC(name:string){
    return this.form.get(name)
  }

  submit(){
    console.log(this.form);
    
  }

  addSuperPotere(){
    let control = new FormControl(null);
    (this.form.get('superpotere') as FormArray).push(control)
  }

  getSuperPotereFields(){
    return (this.form.get('superpotere') as FormArray).controls
  }

}
