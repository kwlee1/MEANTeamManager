// require in your controllers, if we have multiple controllers we require all of them!

// example
// const quotes = require('./../controllers/quotes.js')

const path = require('path');

var player=require('../controllers/players.js');
// routing exports a function that takes app
module.exports = function(app){

	app.get("/all", function(req, res){
		player.all(req, res);
	});
	app.post("/players", function(req, res){
		player.create(req, res);
	});
	app.put("/players/:id", function(req, res, ){
		player.update(req, res);
	});
	app.delete("/players/:id", function(req, res){
		player.destroy(req, res);
	});

    // catch all to serve the index
    // make sure your file path matches the name of your angular app folder
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
};