
module.exports = function (app) {
     var controller = app.controllers.controllerEstados;

    app.route("/estados")
        .get(controller.listarTodosEstados)
        .post(controller.salvarEstado);
}


