const fs = require('fs');

class Recycler {
	constructor(state, mainProduct, link) {
		this.state = state;
		this.mainProduct = mainProduct;
		const statement = `${this.mainProduct} has been given to Producer\n`
		this.go = async  function() {
			await fs.appendFileSync('../Database/output.txt', statement);
			console.log(statement);
			this.state.change(new file.Producer(this.state, this.mainProduct));
		};
	}
}

const file = require('../Handlers/files');

module.exports = Recycler;
