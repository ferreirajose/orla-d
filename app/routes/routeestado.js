module.exports = function(app) {

  var controller = app.controllers.controllerEstados;

  app.route('/estados')
     .post(controller.saveEstado);
 };
