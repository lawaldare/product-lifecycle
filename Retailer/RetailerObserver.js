class RetailerObserver {
	constructor() {
		this.state = new file.Production();
		this.goTo = function(product) {
			this.state.change(new file.Retailer(this.state, product));
		};
	}
}

const file = require('../files');

module.exports = RetailerObserver;
