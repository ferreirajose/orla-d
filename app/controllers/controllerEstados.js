module.exports = function (app) {

    var Estado = app.models.modelEstados;
    var Cidade = app.models.modelCidades;
	var Orla = app.models.modelOrlas;

    var controllerEstados = {};

    controllerEstados.saveEstado = function (req, res) {
        Estado.save({
        	estado_nome: "estado",
            cidade_nome: "cidade",
            orla_nome: "orla"
        	})
            .then(function (contato) {
            	console.log(contato)
                //res.status(201).json(contato);
            }, function (erro) {
                console.log(erro);
                //res.status.json(erro);
            });

    };

    return controllerEstados;

}