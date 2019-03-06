class Retailer {
	constructor(product, mainProduct) {
		this.product = product;
		this.mainProduct = mainProduct;
		this.go = async function() {
			await console.log(`${this.mainProduct} has been given to Consumer`);
			this.product.change(new file.Consumer(this.product, this.mainProduct));
		};
	}
}

const file = require('../files');

module.exports = Retailer;
