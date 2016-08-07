module.exports = function (app) {

    var Estado = app.models.modelEstados;
    var controllerEstados = {};

    Estados = {
       "estado_nome": 'paraiba',
       "cidade_nome": [{"cidade_nome": 'joao pessoa'}],
       "orla_nome": [{"orla_nome": 'bessa'}]
    };

    controllerEstados.saveEstado = function (req, res) {

        Estado.create(req.body)
            .then(function (contato) {
            	console.log(contato)
                res.status(201).json(contato);
            }, function (erro) {
                console.log(erro);
                res.status.json(erro);
            });

    };

    return controllerEstados;

}
