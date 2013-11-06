module.exports.draw = function(lib_path, app){
  var path = require('path'),
      Router = require(path.join(lib_path, 'router.js'))
  ;
  new Router(app)
    .match('/', 'properties#index')
}
