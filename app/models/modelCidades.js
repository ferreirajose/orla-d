var mongoose = require('mongoose'),
    Schema = mongoose.Schema

module.exports = function (app) {
    var cidadeSchema = Schema({
        cidade_nome: [{ type: Schema.Types.ObjectId, ref: 'Estados' }]
    });

    mongoose.set("debug", true);
    return mongoose.model("Cidades", cidadeSchema);

};
