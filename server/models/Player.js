var mongoose=require('mongoose');
var PlayerSchema=new mongoose.Schema({
	name: {type: String, required: [true, "Name is required"], minlength: [2, "Name must be at least 2 characters"]},
	position: {type: String},
	game_1: {type: String, enum: ["Playing", "Not Playing", "Undecided"], default: "Undecided"},
	game_2: {type: String, enum: ["Playing", "Not Playing", "Undecided"], default: "Undecided"},
	game_3: {type: String, enum: ["Playing", "Not Playing", "Undecided"], default: "Undecided"}
}, {timestamps: true});
mongoose.model("Player", PlayerSchema);