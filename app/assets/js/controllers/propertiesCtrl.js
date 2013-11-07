define(['controllers/controllers'], function(controllers){
  controllers.controller('propertiesCtrl', ['$scope', function($scope){
    $scope.filterging = {}
    var floorplans = [
      {bed: 2, bath: 3, price: '$2000-1900'},
      {bed: 2, bath: 3, price: '$2000-1900'},
      {bed: 2, bath: 3, price: '$2000-1900'}
    ];

    var description= "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.  ";
    $scope.properties = [
      {floorplans: floorplans, id: 1, name: 'The Uptown', img: '', price: 2000, bed: '2-3', location: 'San Francisco'},
      {floorplans: floorplans, id: 2, name: 'Lake View Towers', img: '', price: 2010, bed: '2-3', location: 'San francisco'},
      {floorplans: floorplans, id: 3, name: 'Merritt on 3rd', img: '', price: 2200, bed: '2-3', location: 'New York'},
      {floorplans: floorplans, id: 4, name: 'Northgate Family Residences', img: '', price: 10, bed: '2-3', location: 'San francisco'},
      {floorplans: floorplans, id: 5, name: 'Foo2', img: '', price: 1900, bed: '2-3', location: 'New York'},
      {floorplans: floorplans, id: 6, name: 'Foo2', img: '', price: 10, bed: '2-3', location: 'New York'},
      {floorplans: floorplans, id: 7, name: 'Foo1', img: '', price: 10, bed: '2-3', location: 'San francisco'},
      {floorplans: floorplans, id: 8, name: 'Foo2', img: '', price: 10, bed: '2-3', location: 'New York'},
      {floorplans: floorplans, id: 9, name: 'Lake View Towers', img: '', price: 2010, bed: '2-3', location: 'San francisco'},
      {floorplans: floorplans, id: 10, name: 'Merritt on 3rd', img: '', price: 2200, bed: '2-3', location: 'New York'},
      {floorplans: floorplans, id: 14, name: 'Northgate Family Residences', img: '', price: 10, bed: '2-3', location: 'San francisco'},
      {floorplans: floorplans, id: 15, name: 'Foo2', img: '', price: 1900, bed: '2-3', location: 'New York'},
      {floorplans: floorplans, id: 16, name: 'Foo2', img: '', price: 10, bed: '2-3', location: 'New York'},
      {floorplans: floorplans, id: 17, name: 'Foo1', img: '', price: 10, bed: '2-3', location: 'San francisco'},
      {floorplans: floorplans, id: 13, name: 'Super foo', img: '', price: 10, bed: '2-3', location: 'New York'}
    ];

    $scope.show_property=function(index){
      $scope.active_property.active = !$scope.active_property.active;
    };
    $scope.active_property = {
      description: description,
      active: false,
      name: "Northgate Family Residences",
      slides: [
        {id: 1, src: 'http://tempo5.sandicor.com/SNDImages/147/100017811_A01_81.jpg'},
        {id: 2, src: 'http://tempo5.sandicor.com/SNDImages/147/100017811_B01_81.jpg'},
        {id: 3, src: 'http://tempo5.sandicor.com/SNDImages/147/100017811_C01_81.jpg'},
        {id: 4, src: 'http://tempo5.sandicor.com/SNDImages/147/100017811_D01_81.jpg'},
        {id: 5, src: 'http://tempo5.sandicor.com/SNDImages/147/100017811_E01_81.jpg'},
        {id: 6, src: 'http://tempo5.sandicor.com/SNDImages/147/100017811_F01_81.jpg'},
        {id: 7, src: 'http://tempo5.sandicor.com/SNDImages/147/100017811_G01_81.jpg'},
      ]
    }

    angular.extend($scope, {center: {latitude: 36.497582804367546, longitude: -120.548828125 }, markers: [], zoom: 8});
  }]);
});
