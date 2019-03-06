class ProducerObserver {
	constructor() {
		this.state = new file.Production();
		this.goTo = function(product) {
			this.state.change(new file.Producer(this.state, product));
		};
	}
}

const file = require('../../Handlers/files');

module.exports = ProducerObserver;
