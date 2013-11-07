define([
  'angular',
  'tw_bootstrap',
  'ui-bootstrap',
  'ui-bootstrap-tpls',
  'controllers/propertiesCtrl',
  'google_maps',
  'async!http://maps.googleapis.com/maps/api/js?sensor=false&language=en',
], function(){
  'use strict';
  return angular.module('immoly', ['controllers', 'google-maps']);
});
