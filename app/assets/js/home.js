//define the require config
require.config({
  paths: {
    angular: './vendor/angular/angular.min',
    domReady: '/public/scripts/vendor/require/domReady',
    app: 'app',
    bootstrap: 'bootstrap',
    tw_bootstrap: './vendor/bootstrap/bootstrap.min',
    jquery: '/public/scripts/vendor/jquery/jquery-1.10.2.min'
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
     'jquery': {exports: 'jQuery'}
  }
});

require(['bootstrap', 'app'], function(bootstrap, dummy){
  'use strict';
  bootstrap([
    { dom: document.body, name: dummy['name']}
  ])
})
