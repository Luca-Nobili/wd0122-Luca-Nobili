import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  



  constructor(private auth:AuthService, private userService: UserService) { }

  users : User [] | undefined = undefined

  input: string | undefined
 password: string | undefined

  ngOnInit(): void {
    this.userService.getProfilo(false).then((res : User[])=>{
      this.users = res
    })
  }


  authData = {
    email : '',
    password : ''
  }

  login(){
    this.auth.login(this.authData).subscribe((res:any) => {
      console.log(res);
      this.auth.logUser(res.accessToken)
    })
  }

  save(){
    this.userService.addProfilo(this.input as string, this.password as string).then(res =>{
      this.users = res.filter(e=> !e.completed)
    })
  }




}
