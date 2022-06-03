import { ITodo } from "../interface/todo";

export class Todo implements ITodo{
    id: number;
    title: string;
    completed: boolean;

    constructor(id:number,title:string,compleded:boolean){
        this.id = id
        this.title = title
        this.completed = compleded
    }
}
