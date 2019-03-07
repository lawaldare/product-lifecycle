class RecyclerObserver { //observer for recycler
	constructor() {
		this.state = new file.Production(); //creating instance of production
		this.goTo = function(product) { // method to alert the Recycler state
			this.state.change(new file.Recycler(this.state, product));
		};
	}
}

const file = require('../../Handlers/files');

module.exports = RecyclerObserver;
