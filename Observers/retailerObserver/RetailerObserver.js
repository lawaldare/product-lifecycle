class RetailerObserver { //observer for retailer
	constructor() {
		this.state = new file.Production(); //creating instance of Production
		this.goTo = function(product) { // method to alert the retailer state
			this.state.change(new file.Retailer(this.state, product));
		};
	}
}

const file = require('../../Handlers/files');

module.exports = RetailerObserver;
