var mongoose=require('mongoose');
var Player=mongoose.model("Player");
module.exports={
	all: function(req, res){
		Player.find({}, function(err, players){
			if(err){
				res.json(err);
			}else{
				res.json(players);
			};
		});
	},
	create: function(req, res){
		var player=new Player(req.body);
		player.save(function(err){
			if(err){
				res.json(err);
			}else{
				res.json({success: true});
			};
		});
	},
	update: function(req, res){
		Player.update({_id: req.params.id}, req.body, function(err){
			if(err){
				res.json(err);
			}else{
				res.json({success: true});
			};
		});
	},
	destroy: function(req, res){
		Player.remove({_id: req.params.id}, function(err){
			if(err){
				res.json(err);
			}else{
				res.json({success: true});
			};
		});
	}
};