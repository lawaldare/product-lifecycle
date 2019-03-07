class ProducerObserver {// observer for Producer
	constructor() {
		this.state = new file.Production(); //creating instance of Production
		this.goTo = function(product) { // method to alert the producer state
			this.state.change(new file.Producer(this.state, product));
		};
	}
}

const file = require('../../Handlers/files');

module.exports = ProducerObserver;
