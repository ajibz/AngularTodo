import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoModel } from './todoModel';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

 subject = new Subject<TodoModel[]>
subscribeTodo = this.subject.asObservable()

  publishCompletedTodo(todos:TodoModel[]):TodoModel[]{
  
    this.subject.next(todos)
    return todos
  }
}
