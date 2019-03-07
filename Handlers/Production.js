const Producer = require('../States/Producer/Producer');
var Production = function() {// production object object that determines the transition to the next state and it changes the current state.

	this.currentState = new Producer(this);

	this.change = async function(state) {
		this.currentState = state;
		await this.currentState.go();
	};

	this.start = function() {
		this.currentState.go();
	};
};

module.exports = Production;
