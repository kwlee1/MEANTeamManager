import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  user; 

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this.user = this._playerService.user; 
  }

}
