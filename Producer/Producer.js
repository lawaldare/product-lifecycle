class Producer {
	constructor(product, mainProduct) {
		this.product = product;
		this.mainProduct = mainProduct;
		this.go = async function() {
			await console.log(`${this.mainProduct} has been given to Retailer`);
			this.product.change(new file.Retailer(this.product, this.mainProduct));
		};
	}
}

const file = require('../files');

module.exports = Producer;
