var mongoose = require('mongoose'),
	Schema = mongoose.Schema

module.exports = function (app) {

	var estadoSchema = Schema({
		estado_nome: String,
		cidade_nome: String,
		orla_nome:String
	});

	// var cidadeSchema = Schema({
	// 	cidade_nome: String,
	// 	cidade:[{ type: Schema.Types.ObjectId, ref: 'Estados' }]
	// });

	// var orlaSchema = Schema({
	// 	orla_nome: String,
	// 	orla:[{ type: Schema.Types.ObjectId, ref: 'Cidades' }]
	// });

	mongoose.set("debug", true);

	return mongoose.model("estados", estadoSchema);
	
	// var Estados = mongoose.model("Estados", estadoSchema);
	// var Cidades = mongoose.model("Cidades", cidadeSchema);
	// var Orlas = mongoose.model("Orlas", orlaSchema);
};