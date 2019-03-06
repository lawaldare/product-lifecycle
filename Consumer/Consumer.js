const fs = require('fs');

class Consumer {
	constructor(product, mainProduct, link) {
		this.product = product;
		this.mainProduct = mainProduct;
		const statement = `${this.mainProduct} has been given to Recycler\n`;
		this.go =  async function() {
			await fs.appendFileSync('./output.txt', statement);
			console.log(statement);
			this.product.change(new file.Recycler(this.product, this.mainProduct));
		};
	}
}

const file = require('../files');

module.exports = Consumer;
