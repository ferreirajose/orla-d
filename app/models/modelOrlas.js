var mongoose = require('mongoose'),
	Schema = mongoose.Schema

module.exports = function (app) {
	var orlaSchema = Schema({
		orla_nome: String,
		orla:[{ type: Schema.Types.ObjectId, ref: 'Cidades' }]
	});

	mongoose.set("debug", true);
	return mongoose.model("orlas", orlaSchema);

	// var Estados = mongoose.model("Estados", estadoSchema);
	// var Cidades = mongoose.model("Cidades", cidadeSchema);
	// var Orlas = mongoose.model("Orlas", orlaSchema);
};