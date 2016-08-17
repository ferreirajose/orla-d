
module.exports = function (app) {
     var controller = app.controllers.controllerEstados;

     // app.post('/estados', function (req, res) {
     // 	controller.salvarEstado;
     // });
     
    app.route("/estados")
        .get(controller.listarTodosEstados)
        .post(controller.salvarEstado);
}


