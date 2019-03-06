const Producer = require('./Producer/Producer');
var Production = function() {
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
