import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }

  user

  all(callback){
		this._http.get('/all').subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
  };

  create(data, callback){
		this._http.post('/players', data).subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
  };
  
  update(data, callback){
		this._http.put('/players/'+data._id, data).subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
  };
  
	delete(id, callback){
		this._http.delete('/players/'+id).subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
	};

}
