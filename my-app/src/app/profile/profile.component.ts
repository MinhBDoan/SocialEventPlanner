import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user:Object;
  constructor(private data:DataService) { }


  ngOnInit() {
    this.data.getUserByEmail().subscribe(data=>{
      this.user=data;
      console.log(this.user);
    })
  }

}
