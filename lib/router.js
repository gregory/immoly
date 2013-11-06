function Router(app){
  this.app = app
}
module.exports = Router

Router.prototype.match = function match(url,handler,method){
  handler = handler || "root#index";

  var parts = handler.split(/\#/),
      inflection = require("./inflection"),
      controller = parts.shift(),
      action = parts.shift(),
      sys = require('sys'),
      method = method || "get";
  //sys.puts(sys.inspect(controller));

  if(!controller.match(/_controller$/)){
    if (controller == 'root') {
        controller = 'Application';
    }
    controller = controller + "_controller";
  }

  //sys.puts(sys.inspect(Project.controller_objects));
  //sys.puts(sys.inspect(controller));

  var controller_id = inflection.camelize(controller),
      action_handler = Project.controller_objects[controller_id][ action ];

  //add the handler for the url
  if(url && action_handler){
    global.app[method](url,action_handler);
  }
  return this
};



