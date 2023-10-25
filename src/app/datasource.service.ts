import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from './todoModel';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000/"


  

    getAllTodos():Observable<TodoModel[]>{
      const alex = this.http.get<TodoModel[]>(`${this.baseUrl}todo`)
      console.log(alex)
      return alex
    }
    
  

  postTodo(data: TodoModel): Observable<TodoModel> {
    return this.http.post<TodoModel>(`${this.baseUrl}todo`,data)
  }

  updateTodo(data: TodoModel, id:number){
    return this.http.put<TodoModel>(`${this.baseUrl}todo/${id}`,data)
  }

  deleteTodo(ids:number[]){
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: ids
    };

    return this.http.delete<TodoModel>(`${this.baseUrl}todo`, options)
  }

  /*getCompletedTodos(){
    this.http.get(`${this.baseUrl}completed`)
  }

  getActiveTodos(){
    this.http.get(`${this.baseUrl}active`)
  }*/


  
}
