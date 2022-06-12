import { IUser } from "../interface/user";

export class User implements IUser{

    id: number;
   
    email: string;
    password: string;
    completed: boolean

    constructor(id:number, email:string, password:string, completed:boolean){
        this.id = id
        
        this.email = email
        this.password = password
        this.completed = completed
    }
   
}
