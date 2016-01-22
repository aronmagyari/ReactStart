// var App = reqiure('../components/app');
// var AppConstants = require('../constants/app-constants');
// var AppStores = require('../stores/app-store');
var AppDispatcher = require('../dispatchers/app-dispatcher');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

// define store specific variables here



// define store specific functions here



var AppStore = assign(EventEmitter.prototype, {


});

module.exports = AppStore;