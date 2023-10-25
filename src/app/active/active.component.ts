import { Component } from '@angular/core';
import { DatasourceService } from '../datasource.service';
import { TodoModel } from '../todoModel';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent {

  constructor(private httpService:DatasourceService){
  }


  todoReceiver: TodoModel[] = [];


ngOnInit(): void {
   this.httpService.getAllTodos().subscribe((data)=> (
      this.todoReceiver = data.filter(todoModel => todoModel.isActive === true)
    )) 
}


}
