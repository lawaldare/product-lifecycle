const fs = require('fs');

class Consumer {
	constructor(state, mainProduct, link) {
		this.state = state;
		this.mainProduct = mainProduct;
		const statement = `${this.mainProduct} has been given to Recycler\n`;
		this.go =  async function() {
			await fs.appendFileSync('output.txt', statement);
			console.log(statement);
			this.state.change(new file.Recycler(this.state, this.mainProduct));
		};
	}
}

const file = require('../Handlers/files');

module.exports = Consumer;
