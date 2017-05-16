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
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });
  }
  
  onSubmit({ value, valid }: { value: User, valid: boolean }) 
  {
    console.log(value, valid);
  }
}
