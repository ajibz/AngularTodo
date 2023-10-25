import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatasourceService } from './datasource.service';
import { Router } from '@angular/router';
import { TodoModel } from './todoModel';
import { Observable, filter, map } from 'rxjs';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService:DatasourceService, private router:Router, private utility:UtilityService){}

  @ViewChild("applist") applist!: ListComponent


  title = 'TODOAPP';

  inputValue: string = ''; 

  todoEntry: string[] = [];

  todoReceiver: TodoModel[] = [];


 



  


  postItem() {
    if (this.inputValue) {
      this.httpService.postTodo({item:this.inputValue, isCompleted: false, isActive: false}).subscribe((data)=> {
      })
      this.inputValue = ""

      const url = this.router.url === "/all" ? "/" : "/all"
      
      this.router.navigateByUrl(url);
    }
  }

  clearCompleted(){
  //  let observable = this.utility.subject

  //  observable.subscribe((data)=>{
  //   console.log('subscribe',data)
  //   this.todoReceiver = data
  //  })
  this.httpService.getAllTodos().pipe(map((data)=>data.filter((data)=>data.isCompleted === true))).subscribe((data)=>{
    const ids: number[] = [];
       this.todoReceiver = data
       this.todoReceiver.forEach(todo => {
        ids.push(Number(todo.id))
       });
       console.log(ids)
       this.httpService.deleteTodo(ids).forEach((data)=>{
        data.subscribe((data:TodoModel)=>{

          console.log(data)
         })
       })
  })
    
    //  this.todoReceiver.forEach(todo => {
    //   this.ids.push(Number(todo.id))
    //  });
    //  console.log(this.ids)

    // this.httpService.deleteTodo(this.ids) 

  }



  //filteredArray: string[] = [];

  //temporaryArray: string[] = [];


  /* showAll(){
    this.todoEntry = this.temporaryArray.length > 0 ? this.temporaryArray : this.todoEntry
  }


  showCompletedItems(){
    this.temporaryArray = this.todoEntry
    this.todoEntry = this.applist.completedItems
  }

  clearCompletedItems(){
    this.filteredArray = this.temporaryArray.length > 0 ? this.temporaryArray.filter(item => !this.applist.completedItems.includes(item)) : this.todoEntry.filter(item => !this.applist.completedItems.includes(item))
    this.todoEntry = this.filteredArray
    this.applist.completedItems =[]
    this.temporaryArray = this.todoEntry
  }

  showActive(){
    this.temporaryArray = this.todoEntry
    this.todoEntry = this.applist.activeItems
  } */


  // const filteredArray = array1.filter(item => !array2.includes(item));


  }


 

