class Recycler {
	constructor(product, mainProduct) {
		this.product = product;
		this.mainProduct = mainProduct;
		this.go = async function() {
			await console.log(`${this.mainProduct} has been given to Retailer`);
			this.product.change(new file.Producer(this.product, this.mainProduct));
		};
	}
}

const file = require('../files');

module.exports = Recycler;
