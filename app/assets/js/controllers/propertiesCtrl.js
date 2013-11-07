define(['controllers/controllers'], function(controllers){
  controllers.controller('propertiesCtrl', ['$scope', function($scope){
    $scope.filterging = {}
    $scope.properties = [
      {id: 1, name: 'The Uptown', img: '', price: 2000, bed: '2-3', location: 'San Francisco'},
      {id: 2, name: 'Lake View Towers', img: '', price: 2010, bed: '2-3', location: 'San francisco'},
      {id: 3, name: 'Merritt on 3rd', img: '', price: 2200, bed: '2-3', location: 'New York'},
      {id: 4, name: 'Northgate Family Residences', img: '', price: 10, bed: '2-3', location: 'San francisco'},
      {id: 5, name: 'Foo2', img: '', price: 1900, bed: '2-3', location: 'New York'},
      {id: 6, name: 'Foo2', img: '', price: 10, bed: '2-3', location: 'New York'},
      {id: 7, name: 'Foo1', img: '', price: 10, bed: '2-3', location: 'San francisco'},
      {id: 8, name: 'Foo2', img: '', price: 10, bed: '2-3', location: 'New York'},
      {id: 9, name: 'Lake View Towers', img: '', price: 2010, bed: '2-3', location: 'San francisco'},
      {id: 10, name: 'Merritt on 3rd', img: '', price: 2200, bed: '2-3', location: 'New York'},
      {id: 14, name: 'Northgate Family Residences', img: '', price: 10, bed: '2-3', location: 'San francisco'},
      {id: 15, name: 'Foo2', img: '', price: 1900, bed: '2-3', location: 'New York'},
      {id: 16, name: 'Foo2', img: '', price: 10, bed: '2-3', location: 'New York'},
      {id: 17, name: 'Foo1', img: '', price: 10, bed: '2-3', location: 'San francisco'},
      {id: 13, name: 'Super foo', img: '', price: 10, bed: '2-3', location: 'New York'}
    ];

    $scope.show_property=function(index){
      $scope.active_property.active = !$scope.active_property.active;
    };
    $scope.active_property = {
      active: false,
      name: "Northgate Family Residences",
      slides: [
        {id: 1, src: 'http://placehold.it'},
        {id: 2, src: 'http://placehold.it'},
        {id: 3, src: 'http://placehold.it'},
        {id: 4, src: 'http://placehold.it'},
        {id: 5, src: 'http://placehold.it'},
        {id: 6, src: 'http://placehold.it'},
        {id: 7, src: 'http://placehold.it'},
      ]
    }

    angular.extend($scope, {center: {latitude: 36.497582804367546, longitude: -120.548828125 }, markers: [], zoom: 8});
  }]);
});
