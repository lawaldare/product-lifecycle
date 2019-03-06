class ConsumerObserver {
	constructor() {
		this.state = new file.Production();
		this.goTo = function(product) {
			this.state.change(new file.Consumer(this.state, product));
		};
	}
}

const file = require('../../Handlers/files');

module.exports = ConsumerObserver;
