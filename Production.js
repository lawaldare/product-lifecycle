const Producer = require('./Producer/Producer');
var Production = function() {
	this.currentState = new Producer(this);

	this.change = function(state) {
		this.currentState = state;
		this.currentState.go();
	};

	this.start = function() {
		this.currentState.go();
	};
};

module.exports = Production;
