var colors = require("colors");
module.exports = function (app) {

    var Estado = app.models.modelEstados;
    var Cidade = app.models.modelCidades;
    var controllerEstados = {};


    controllerEstados.listarTodosEstados = function(req, res){
        // Estado.find().exec().then(function (estado) {
        //     res.json(estado);
        // }, function (erro) {
        //     console.error(erro);
        //     res.status(500).json(erro);
        // });
        //console.log("Tetse: "+findCollection() == "Paraíba");
        //console.log(colors.green(findCollection()));
        var obj = findCollection();

        for(var key in obj){
          console.log(key);
        }
       // console.log(colors.red(obj));

        // newObject = obj.map(function (value) {
        //     return value;
        // });

        // console.log(colors.green(newObject.estado_nome));
    
    };

    var findCollection = function(){
   
       //  var promise = Estado.find().exec();
        
       //  promise.then(function(user) {
       //       user.forEach(function(jedi){
       //          //console.log(colors.green(jedi.estado_nome));
       //      });
       //  }).catch(function(err){
       //    // just need one of these
       //    console.log('error:', err);
       //  });
       
       // return promise;
    }

    controllerEstados.salvarEstado = function (req, res) {
        
        var estado = req.body.estado_nome;

        var patt = /para(i|í)ba/i;

        var r = patt.test(estado); // return Boolean;

        var promise = Estado.find().exec();
        
        promise.then(function(user) {
             user.forEach(function(jedi){
                    console.log(colors.green(jedi.estado_nome == estado));
                    //console.log(colors.red(r));
                // if(jedi.estado_nome === r){
                //     console.log(colors.green('true'));
                // }else{
                //     console.log(colors.red('false'));  
                // }
            });
        }).catch(function(err){
            console.log(colors.red('error:', err));  
        });



         // Cidade.create({cidade_nome: cidade, cidade_reference: [Estado._id]}, function(err, data){
         //            if (err) return res.json(err);
         //            res.status(201).json(estado);
         //       }); 
        // cidade = new Cidade({
        //     cidade_nome: req.body.cidade_nome
        //     cidade_reference: [Estado._id];
        // });

        // Estado.create(estado)
        //     .then(function (estado) {
        //         res.status(201).json(estado);
        //     }, function (erro) {
        //         console.log(erro);
        //         res.status.json(erro);
        // });

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

  
        Estado.create(req.body)
              .then(function(estado){
                    Cidade.create({cidade_nome: cidade, cidade_reference: [estado._id]})
                          .then(function(cidade){
                                res.status(201).json(cidade);
                          }, function(erro){
                                res.status.json(erro)
                          });  
                    res.status(201).json(estado);
              }, function(erro){
                    res.status.json(erro)
              });
        
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
