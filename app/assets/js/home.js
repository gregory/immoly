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
    google_map: 'http://maps.googleapis.com/maps/api/js?sensor=false&language=en'
  },
  baseUrl: '/js/',
  priority: ['angular', 'jquery'],
  shims: {
    'angular': { exports: 'angular' },
    'app': {
      deps: ['angular', 'tw_bootstrap']
     },
     'tw_bootstrap': {
      deps: ['jquery']
     },
     'jquery': {exports: 'jQuery'},
     'angular_google_maps': {
        deps: ['google_map']
     }
  }
});

require(['bootstrap', 'app'], function(bootstrap, app){
  'use strict';
  bootstrap([
    { dom: document.body, name: app['name']}
  ])
})
