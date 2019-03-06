const fs = require('fs');

class Retailer {
	constructor(state, mainProduct, link) {
		this.state = state;
		this.mainProduct = mainProduct;
		this.go =  async function() {
			const statement = `${this.mainProduct} has been given to Consumer\n`;
			await fs.appendFileSync('output.txt', statement);
			console.log(statement);
			this.state.change(new file.Consumer(this.state, this.mainProduct));
		};
	}
}

const file = require('../Handlers/files');

module.exports = Retailer;
