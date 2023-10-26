import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { CompletedComponent } from './completed/completed.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{path:"", component:ListComponent},
                        {path:"all", component:ListComponent},
                        {path:"all/:completed", component:ListComponent},
                        {path:"active", component:ActiveComponent},
                        {path:"active/:completed", component:ActiveComponent},
                        {path:"completed", component:CompletedComponent},
                        {path:"completed/:completed", component:CompletedComponent},
                        {path:"clear", component:CompletedComponent,outlet:"anotherlink"}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
