import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  success = false;


  constructor(private formBuilder: FormBuilder) { 
    this.loginForm= this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })

  }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }
    this.success=true;
    //backend
  }

  ngOnInit() {
  }

}
