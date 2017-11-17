import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  user; 
  players;
	game;

  constructor(private _playerService: PlayerService, private _route: ActivatedRoute) {
    this._playerService.all((res)=>{
			this.players=res;
		});
		this._route.paramMap.subscribe((params)=>{
			this.game=params.get("num");
		});
   }

  ngOnInit() {
    this.user = this._playerService.user; 
  }

  changeStatus(change, idx){
		this.players[idx]['game_'+this.game]=change;
		this._playerService.update(this.players[idx], (updateres)=>{
			this._playerService.all((res)=>{
				this.players=res;
			});
		})
	}

}
