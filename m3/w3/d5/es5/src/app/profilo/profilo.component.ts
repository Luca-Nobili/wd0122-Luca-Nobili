import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  users : User [] | undefined = undefined

  input: string | undefined
  password: string | undefined

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfilo(false).then((res : User[])=>{
      this.users = res
    })
    
  }



}
