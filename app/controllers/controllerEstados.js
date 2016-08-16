module.exports = function (app) {

    var Estado = app.models.modelEstados;
    var Cidade = app.models.modelCidades;
	var Orla = app.models.modelOrlas;

    var controllerEstados = {};

    controllerEstados.listarTodosEstados = function(req, res){
        estado.find().exec().then(function (contato) {
            res.json(contato._id);
        }, function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        });
    };

    controllerEstados.listaById = function(req, res){
        res.json('listaById');
        console.log('listaById')
    };

    controllerEstados.salvarEstado = function (req, res) {
        var estado = req.body.estado_nome;
        var cidade = req.body.cidade_nome;
        var orla = req.body.orla_nome;
        //console.log('estado: '+ estado + '\n' + ' cidade: '+ cidade);

        estado = new Estado({
            estado_nome: req.body.estado_nome
        });

        estado.save(function(err, estado){
            if (err) return res.json(err);
            res.status(201).json(estado);
        });

        Estado.count({_id: estado._id}, function (err, count){ 
        console.log(count._id);
    }); 
        

        // Cidade.save(function(err, cidade){
        //     if (err) return res.json(err);
        //     return res.json(cidade);
        // });

        // Orla.save(function(err, orla){
        //     if (err) return res.json(err);
        //     return res.json(orla);
        // });

        // Estado.create(estado, function(erro, c, o){
        //        Cidade.create({cidade_nome: cidade, cidade_reference: [Estado._id]}, function(err, data){
        //             if (err) return res.json(err);
        //             res.status(201).json(estado);
        //        });   
        // });

  
        // Estado.create(req.body)
        //       .then(function(estado){

        //             Cidade.create({cidade_nome: cidade, cidade_reference: [estado._id]})
        //                   .then(function(cidade){
        //                         res.status(201).json(cidade);
        //                   }, function(erro){
        //                         res.status.json(erro)
        //                   });  
        //             res.status(201).json(estado);
        //       }, function(erro){
        //             res.status.json(erro)
        //       });
        
    };

    controllerEstados.atualizarEstado = function (req, res) {
        res.json('atualizarEstado');
        console.log('atualizarEstado')
    };

    controllerEstados.removerEstado = function (req, res) {
        res.json('removerEstado');
        console.log('removerEstado')
    };
// 
    return controllerEstados;

}