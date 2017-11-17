import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  player={name:"", position:""}

  constructor(private _playerService: PlayerService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
		this._playerService.create(this.player, (createres)=>{
			this._router.navigateByUrl('/players/list');
		})
	}

}
