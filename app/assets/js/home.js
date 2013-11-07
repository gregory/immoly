//define the require config
require.config({
  paths: {
    angular: '/public/js/vendor/angular/angular.min',
    domReady: '/public/js/vendor/require/domReady',
    app: 'app',
    bootstrap: 'bootstrap',
    tw_bootstrap: '/public/js/vendor/bootstrap/bootstrap.min',
    jquery: '/public/js/vendor/jquery/jquery-1.10.2.min',
    google_maps: '/public/js/vendor/angular-google-maps/angular-google-maps',
    async: '/public/js/vendor/requirejs-plugins/src/async',
    'ui-bootstrap': '/public/js/vendor/ui-bootstrap/ui-bootstrap-0.6.0.min',
    'ui-bootstrap-tpls': '/public/js/vendor/ui-bootstrap/ui-bootstrap-tpls-0.6.0.min',

  },
  baseUrl: '/js/',
  priority: ['angular', 'jquery'],
  shims: {
    'angular': { exports: 'angular' },
    'app': {
      deps: ['angular', 'jquery', 'tw_bootstrap','async', 'google_maps']
     },
     'tw_bootstrap': {
      deps: ['jquery']
     },
     'jquery': {exports: 'jQuery'},
     'google_maps': {
        deps: ['angular', 'jquery'],
     },
     'bootstrap': {
        deps: ['angular']
     },
     'ui-bootstrap': {
        deps: ['angular']
     },
     'ui-bootstrap-tpls': {
        deps: ['angular', 'ui-bootstrap']
     }
  }
});

require(['bootstrap', 'jquery', 'app'], function(bootstrap, $, app){
  'use strict';
  bootstrap([
    { dom: document.body, name: app['name']}
  ])
  $('.carousel').carousel()
})
