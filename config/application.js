module.exports.configure = function(options){
  var app = global.app,
    express = options.express,
    path    = require('path'),
    assets  = require('connect-assets'),
    logger    = require(path.join(options.paths.lib, 'logger')),
    stylus  = require('stylus'),
    nib     = require('nib')
  ;

  global.mongodb = {} //mongoose.connect('mongodb://localhost/project');
  global.logger  = logger

  require(path.join(options.paths.lib,'models.js')).autoload(options.paths.models, mongodb);
  require(path.join(options.paths.lib,'controllers.js')).autoload(options.paths.controllers);
  require(path.join(options.paths.config,'routes.js')).draw(options.paths.lib, app);

  app.configure('development', function(){
    app.use(express.logger('dev'));
  })

  function errorHandler(err, req, res, next){
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render('error_template', {error: err});
  }
  app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', options.paths.views);
    app.set('view engine', 'jade');
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(app.router);
    app.use(errorHandler);


    app.use('/public/vendor', express.static(path.join(options.paths.public, 'vendor'), {maxAge: 86400000}));

    app.use('/public/styles',stylus.middleware({
      debug: true,
      src: options.paths.assets + '/styles',
      dest: options.paths.public + '/styles',
      compile: function(str, path){
        return stylus(str).set('filename', path).use(nib()).set('compress', false).import('nib');
      }
    }));

    app.use('/public', express.static(options.paths.public));
  });

  return app;
}
