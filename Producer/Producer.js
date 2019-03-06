const fs = require('fs');
const stopper = require('../Handlers/check');

class Producer {
	constructor(state, mainProduct, link) {
		this.state = state;
		this.mainProduct = mainProduct;
		const statement = `${this.mainProduct} has been given to Retailer\n`;
		this.go =  async function() {
			await fs.appendFileSync('../Database/output.txt', statement);
			console.log(statement);
			if(stopper == null) this.state.change(new file.Retailer(this.state, this.mainProduct));
		};
	}
}

const file = require('../Handlers/files');

module.exports = Producer;
