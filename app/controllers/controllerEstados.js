var colors = require("colors");
module.exports = function (app) {

    var Estado = app.models.modelEstados;
    var Cidade = app.models.modelCidades;
    var controllerEstados = {};


    controllerEstados.listarTodosEstados = function(req, res){
        console.log(findCollection());

        // Estado.find().exec().then(function (estado) {
        //     res.json(estado);
        // }, function (erro) {
        //     console.error(erro);
        //     res.status(500).json(erro);
        // });
    };

    var findCollection = function(){
        // var promise = Estado.query().exec().then(function (estado) {
        // var promise = Estado.find().exec(function (err, estado) {
            
        // }, function (erro) {
        //     console.error(erro);
        // });

        var promise = Estado.find().exec();

        promise.then(function(user) {
          return user;
        })
        .then(function(user) {
          //console.log('Estado : ' + user._id);
           user.forEach(function(jedi){
                // console.log(jedi.name);
                console.log(colors.green(jedi.estado_nome));
            });
          //console.log(colors.green('Estado : ' + user));
          // do something with updated user
        })
        .catch(function(err){
          // just need one of these
          console.log('error:', err);
        });
       
       return promise;
    }

    controllerEstados.salvarEstado = function (req, res) {
        
        var estado = req.body;

        var patt = /para(i|í)ba/i;
        var r = patt.test(estado);
         // Cidade.create({cidade_nome: cidade, cidade_reference: [Estado._id]}, function(err, data){
         //            if (err) return res.json(err);
         //            res.status(201).json(estado);
         //       }); 
        // cidade = new Cidade({
        //     cidade_nome: req.body.cidade_nome
        //     cidade_reference: [Estado._id];
        // });

        Estado.create(estado)
            .then(function (estado) {
                Cidade.create({cidade_nome: req.body.cidade_nome, estado_reference: estado._id}, function(err, data){
                    if (err) return res.json(err);
                    res.status(201).json(estado);
               }); 
                res.status(201).json(estado);
            }, function (erro) {
                console.log(erro);
                res.status.json(erro);
            });

            // var estado = req.body.estado_nome;
        // var cidade = req.body.cidade_nome;
        // var orla = req.body.orla_nome;
        // //console.log('estado: '+ estado + '\n' + ' cidade: '+ cidade);

        // estado = new Estado({
        //     estado_nome: req.body.estado_nome
        // });

        // estado.save(function(err, estado){
        //     if (err) return res.json(err);
        //     res.status(201).json(estado);
        // });

        // Estado.count({_id: estado._id}, function (err, count){ 
        // console.log(count._id);
        

    // Estados = {
    //    "estado_nome": 'paraiba',
    //    "cidade_nome": [{"cidade_nome": 'joao pessoa'}],
    //    "orla_nome": [{"orla_nome": 'bessa'}]
    // };

        // Cidade.save(function(err, cidade){
        //     if (err) return res.json(err);
        //     return res.json(cidade);
        // });

        // Orla.save(function(err, orla){
        //     if (err) return res.json(err);
        //     return res.json(orla);
        // });
        // estado = req.body.estado
        // var a = /estado/i
        // a.test();
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

    return controllerEstados;

}
