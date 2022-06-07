import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.scss']
})
export class FormTDComponent implements OnInit {
  @ViewChild('f', {static:true}) form!:NgForm
  constructor() { }

  ngOnInit(): void {

    this.form.statusChanges?.subscribe(status => {
      console.log(status, this.form);
      
    })
  }

  submit(){
    console.log(this.form);
    
  }

}
