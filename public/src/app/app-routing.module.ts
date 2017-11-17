import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './players/list/list.component';
import { AddComponent } from './players/add/add.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', component:UserComponent},
  {path: "players", component:PlayersComponent, children:[
    {path: "list", component: ListComponent},
    {path: "add", component: AddComponent}
  ]},
  {path: "status", component: StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
