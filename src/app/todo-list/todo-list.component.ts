import { Component } from '@angular/core';
import { Todo } from 'src/core/models/todo';
import { CalculService } from '../services/calcul.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
listTodo:Todo[]=[
  {id: 1,title:"ADFA",etat:true},
  {id:2,title:"akdk",etat:true},
  {id:3,title:"jdgi",etat:false}
]
nbr!:number;
constructor(private service:CalculService){

  this.nbr=this.service.getStat(this.listTodo,"etat",true)
  console.log(this.nbr)
}
  
}
