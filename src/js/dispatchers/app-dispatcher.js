// var Dispatcher = require('flux').Dispatcher;
// var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Dispatcher(), {
	/*
	actionType: function(action) {
		console.log(action);
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		})
	}
	*/
});

module.exports = AppDispatcher;