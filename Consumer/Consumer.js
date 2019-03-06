class Consumer {
	constructor(product, mainProduct) {
		this.product = product;
		this.mainProduct = mainProduct;
		this.go = async function() {
			await console.log(`${this.mainProduct} has been given to Recycler`);
			this.product.change(new file.Recycler(this.product, this.mainProduct));
		};
	}
}

const file = require('../files');

module.exports = Consumer;
