const fs = require('fs');

class Retailer {
	constructor(product, mainProduct, link) {
		this.product = product;
		this.mainProduct = mainProduct;
		this.go =  async function() {
			const statement = `${this.mainProduct} has been given to Consumer\n`;
			await fs.appendFileSync('./output.txt', statement);
			console.log(statement);
			this.product.change(new file.Consumer(this.product, this.mainProduct));
		};
	}
}

const file = require('../files');

module.exports = Retailer;
