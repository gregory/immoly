var actions = {};

actions.index = function(req, res){
  var locales = {title: 'Properties Listing'};
  res.render('properties/index');
}
module.exports = actions;
