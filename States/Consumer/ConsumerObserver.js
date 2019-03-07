class ConsumerObserver {//observer for consumer state
	constructor() {
		this.state = new file.Production(); //creating instance of Production
		this.goTo = function(product) { // method to alert the consumer state
			this.state.change(new file.Consumer(this.state, product));
		};
	}
}

const file = require('../../Handlers/files');

module.exports = ConsumerObserver;
