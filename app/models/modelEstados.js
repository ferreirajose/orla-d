var mongoose = require('mongoose'),
    Schema = mongoose.Schema

module.exports = function (app) {
    var estadoSchema = Schema({
        estado_nome: {
	        type :String,
	        unique : true
    	}
    });

    mongoose.set("debug", true);
    return mongoose.model("Estados", estadoSchema);

};
