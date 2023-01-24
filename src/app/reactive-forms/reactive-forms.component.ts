import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  constructor (private fb:FormBuilder){}
  public title = 'new shizz';
  submit =false;
  
  registrationForm = this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    phone:['',Validators.required,Validators.pattern('[789][0-9]{9}')],
    emailId:['',Validators.required , Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
  });
  
  get formsValue()
  {
    return this.registrationForm.controls;
  }
  onSubmit()
  {
    this.submit=true;
  }
  ngOnInit(){
    }

}
