class RecyclerObserver {
	constructor() {
		this.state = new file.Production();
		this.goTo = function(product) {
			this.state.change(new file.Recycler(this.state, product));
		};
	}
}

const file = require('../files');

module.exports = RecyclerObserver;
