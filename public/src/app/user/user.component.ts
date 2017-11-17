import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../player.service';
import { User } from './../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = new User(); 

  constructor(private _playerService: PlayerService, private _router: Router) { }

  ngOnInit() {
    this._playerService.user = null; 
  }

  onSubmit(){
    this._playerService.user = this.user; 
    this._router.navigateByUrl('/players/list')

  }
}
