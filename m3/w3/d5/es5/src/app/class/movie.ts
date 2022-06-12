import { IMovie } from "../interface/movie";

export class Movie implements IMovie{
    id: number;
    titolo: string;
   completed: boolean;

    constructor(id:number,titolo:string,completed:boolean){
        this.id = id
        this.titolo = titolo
        this.completed = completed
    }
}
