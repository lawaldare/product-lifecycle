const fs = require('fs');

class Producer {
	constructor(product, mainProduct, link) {
		this.product = product;
		this.mainProduct = mainProduct;
		const statement = `${this.mainProduct} has been given to Retailer\n`;
		this.go =  async function() {
			await fs.appendFileSync('./output.txt', statement);
			console.log(statement);
			this.product.change(new file.Retailer(this.product, this.mainProduct));
		};
	}
}

const file = require('../files');

module.exports = Producer;
