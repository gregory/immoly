//define the require config
require.config({
  paths: {
    angular: './vendor/angular/angular.min',
    domReady: '/public/scripts/vendor/require/domReady',
    dummy: 'app',
    bootstrap: 'bootstrap',
  },
  baseUrl: '/js/',
  priority: ['angular'],
  shims: {
    'angular': { exports: 'angular' },
    'dummy': {
      deps: ['angular']
     }
  }
});

require(['bootstrap', 'dummy'], function(bootstrap, dummy){
  'use strict';
  bootstrap([
    { dom: document.body, name: dummy['name']}
  ])
})
