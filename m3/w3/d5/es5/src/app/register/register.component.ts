import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  authData = {
    email : 'admin@admin.it',
    password : 'password'
  }

  register(){
    this.userService.registerUser(this.authData)
    .subscribe(data => {
      console.log(data)
    })
  }

}
