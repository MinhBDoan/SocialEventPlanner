import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  eventForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder,private router: Router) { 
    this.eventForm= this.formBuilder.group({
      title:['', Validators.required],
      description:['', Validators.required]
    })

  }

  ngOnInit() {
  }
onSubmit(){
  this.router.navigate(['api/home']);
}
}
