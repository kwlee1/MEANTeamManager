import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players;  

  constructor(private _playerService: PlayerService) {
		this._playerService.all((res)=>{
			this.players=res;
		});
   }

  ngOnInit() {
  }

  onDelete(id){
		this._playerService.delete(id, (deleteres)=>{
			this._playerService.all((res)=>{
				this.players=res;
			});
		});
	}

}
