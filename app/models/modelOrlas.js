var mongoose = require('mongoose'),
	Schema = mongoose.Schema

module.exports = function (app) {
	var orlaSchema = Schema({
		orla_nome: String,
		orla_reference:[{ type: Schema.Types.ObjectId, ref: 'Cidades' }]
	});

	mongoose.set("debug", true);
	return mongoose.model("Orlas", orlaSchema);
};