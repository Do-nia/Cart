import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
  myForm: FormGroup;
  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl ('', [Validators.required, Validators.pattern('[a-z0-9.@]*')]),
      email: new FormControl ('', [Validators.required, Validators.pattern('[a-z0-9.@]*')]),
      password:new FormControl ('', [Validators.required, Validators.minLength(6),Validators.maxLength(12) ]),
      confirmPassword:new FormControl ('', [Validators.required, Validators.minLength(6),Validators.maxLength(12) ])
    });
  }
  onSubmit(myForm){
    console.log(myForm);
    
  }

}
