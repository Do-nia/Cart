import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  myForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
    email: new FormControl ('', [Validators.required, Validators.pattern('[a-z0-9.@]*')]),
    password:new FormControl ('', [Validators.required, Validators.minLength(6),Validators.maxLength(12) ]),
    confirmPassword:new FormControl ('', [Validators.required, Validators.minLength(6),Validators.maxLength(12) ])
  });

  }
  onSubmit(myForm){
    console.log(myForm);
    
  }
}