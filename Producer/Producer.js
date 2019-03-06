const fs = require('fs');

class Producer {
	constructor(state, mainProduct, link) {
		this.state = state;
		this.mainProduct = mainProduct;
		const statement = `${this.mainProduct} has been given to Retailer\n`;
		this.go =  async function() {
			await fs.appendFileSync('./output.txt', statement);
			console.log(statement);
			this.state.change(new file.Retailer(this.state, this.mainProduct));
		};
	}
}

const file = require('../files');

module.exports = Producer;
