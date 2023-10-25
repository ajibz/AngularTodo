import { Component, Input, OnInit, Output } from '@angular/core';
import { DatasourceService } from '../datasource.service';
import { TodoModel } from '../todoModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private httpService:DatasourceService){
  }

 
  todoReceiver: TodoModel[] = [];

 
ngOnInit(): void {
    this.httpService.getAllTodos().subscribe((data)=> (
     this.todoReceiver = data
    ))
}


triggerCompleted(completed:Event, todoData:TodoModel){
  const payLoad:TodoModel = {item:todoData.item, isCompleted:(completed.target as HTMLInputElement).checked, isActive:todoData.isActive}
  this.httpService.updateTodo(payLoad,todoData.id!).subscribe((data)=> {
    console.log(data)
  })
}

triggerActive(active:HTMLInputElement, todoData:TodoModel){
  const payLoad:TodoModel = {item:todoData.item, isCompleted:todoData.isCompleted, isActive:active.checked}
  this.httpService.updateTodo(payLoad,todoData.id!).subscribe((data) => {
    console.log(data)
  }
  )
}

   


  


}
