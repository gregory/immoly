define([
  'angular',
  'controllers/propertiesCtrl',
  'async!http://maps.googleapis.com/maps/api/js?sensor=false&language=en',
  'angular_google_maps',
], function(){
  'use strict';
  return angular.module('immoly', ['controllers', 'google-maps']);
});
