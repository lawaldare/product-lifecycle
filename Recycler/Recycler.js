const fs = require('fs');

class Recycler {
	constructor(product, mainProduct, link) {
		this.product = product;
		this.mainProduct = mainProduct;
		const statement = `${this.mainProduct} has been given to Producer\n`
		this.go = async  function() {
			await fs.appendFileSync('./output.txt', statement);
			console.log(statement);
			this.product.change(new file.Producer(this.product, this.mainProduct));
		};
	}
}

const file = require('../files');

module.exports = Recycler;
