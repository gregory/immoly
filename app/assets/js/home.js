//define the require config
require.config({
  paths: {
    angular: '/public/js/vendor/angular/angular.min',
    domReady: '/public/js/vendor/require/domReady',
    app: 'app',
    bootstrap: 'bootstrap',
    tw_bootstrap: '/public/js/vendor/bootstrap/bootstrap.min',
    jquery: '/public/js/vendor/jquery/jquery-1.10.2.min',
    angular_google_maps: '/public/js/vendor/angular-google-maps/angular-google-maps',
    async: '/public/js/vendor/requirejs-plugins/src/async',

  },
  baseUrl: '/js/',
  priority: ['angular', 'jquery'],
  shims: {
    'angular': { exports: 'angular' },
    'app': {
      deps: ['angular', 'jquery', 'tw_bootstrap','async', 'angular_google_maps']
     },
     'tw_bootstrap': {
      deps: ['jquery']
     },
     'jquery': {exports: 'jQuery'},
     'angular_google_maps': {
        deps: ['angular', 'jquery'],
        exports: 'google-maps'
     },
     'bootstrap': {
        deps: ['angular']
     }
  }
});

require(['bootstrap', 'jquery', 'app'], function(bootstrap, $, app){
  'use strict';
  bootstrap([
    { dom: document.body, name: app['name']}
  ])
})
