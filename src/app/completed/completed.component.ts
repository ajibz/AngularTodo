import { Component, DoCheck, Input } from '@angular/core';
import { TodoModel } from '../todoModel';
import { DatasourceService } from '../datasource.service';
import { Observable, Subject, filter, map } from 'rxjs';
import { UtilityService } from '../utility.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements DoCheck{
  
  constructor(private httpService:DatasourceService, private utility:UtilityService, private activatedRoute:ActivatedRoute){

   }
  ngDoCheck(): void {
 
  }


  
  todoReceiver: TodoModel[] = [];


ngOnInit(): void {
    this.httpService.getAllTodos().pipe(map((data)=> data.filter(todoModel => todoModel.isCompleted === true))).subscribe((data)=> (
      this.todoReceiver = data
     
    ))
    
}

}
