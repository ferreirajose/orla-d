var mongoose = require('mongoose'),
    Schema = mongoose.Schema

module.exports = function (app) {
  var Cidade = app.models.modelCidades;
  var Orla = app.models.modelOrlas;

console.log(Orla);
    var estadoSchema = Schema({
        estado: String,
        cidade: [Cidade]
    });

    mongoose.set("debug", true);
    return mongoose.model("Estados", estadoSchema);

};
