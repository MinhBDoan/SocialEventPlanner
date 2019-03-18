import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { User } from '../user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  success=false;
  submitted = false;

  newUser: User= new User();
    // new_fullname:string;
    // new_email:string;
    // new_password:string;
  //  this.form.controls['your form control name'].value

  constructor(private formBuilder: FormBuilder,private data: DataService, private router: Router) { 
    this.registerForm= this.formBuilder.group({
      fullname:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    })

  }

  ngOnInit() {
  }
onSubmit(){
  this.submitted = true;

  if(this.registerForm.invalid){
    return;
  }
  this.success=true;
   console.log("submitting new user info...");
   console.log(this.registerForm);
   console.log(this.registerForm.controls.fullname.value);
       this.newUser.fullname= this.registerForm.controls.fullname.value;
       this.newUser.email= this.registerForm.controls.email.value;
       this.newUser.password= this.registerForm.controls.password.value
       
  
        // this.newUser.$fullname = this.registerForm.controls.fullname.value;
        // this.newUser.$email = this.registerForm.controls.email.value;
        // this.newUser.$password = this.registerForm.controls.password.value;
        this.data.registerUser(this.newUser).subscribe(res =>{

          console.log('register success');
          this.router.navigate(['']);
        },
        err=>{
          console.log(err);
        }
        )
}

}
