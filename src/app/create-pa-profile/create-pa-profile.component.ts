import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './../painterface';

@Component({
  selector: 'app-create-pa-profile',
  templateUrl: './create-pa-profile.component.html',
  styleUrls: ['./create-pa-profile.component.css']
})
export class CreatePaProfileComponent implements OnInit {

  user: FormGroup;
  constructor() {}
  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(10),Validators.pattern("[a-z A-Z 0-9]+")]),
      mobileno: new FormControl('', [Validators.required,Validators.maxLength(10),Validators.pattern("^[7-9][0-9]{9}$")]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required]),
      briefdescription: new FormControl('', [Validators.required])
    });
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) 
  {
    console.log(value, valid);
  }
}
