import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  username = new FormControl('username',[Validators.required]);
  userForm = new FormGroup({
    firstName: new FormControl('firstName',[Validators.required]),
    lastName: new FormControl('lastName', [Validators.required, Validators.minLength(3)]),
    address: new FormGroup({
      city: new FormControl('city'),
      street: new FormControl('street')
    })
  });


  textAdd():void{
    console.log(this.username.value);
  }
  textAdd1():void{
    
  }
  get lastName(){return this.userForm.controls['lastName']}

}
