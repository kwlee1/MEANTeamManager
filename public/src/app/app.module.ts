import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //new
import { HttpModule } from '@angular/http'; //new

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { UserComponent } from './user/user.component';
import { PlayerService } from './player.service';
import { ListComponent } from './players/list/list.component';
import { AddComponent } from './players/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    StatusComponent,
    UserComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
