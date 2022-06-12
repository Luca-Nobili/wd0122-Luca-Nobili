import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  authData = {
    email : '',
    password : ''
  }

  register(){
    this.userService.registerUser(this.authData)
    .subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/login'])


  }

}
