const fs = require('fs');

class Recycler { //Recycler constructor for the Retailer state
	constructor(state, mainProduct, link) {
		this.state = state;
		this.mainProduct = mainProduct;
		const statement = `${this.mainProduct} has been given to Producer\n`
		this.go = async  function() { //method to change the state
			await fs.appendFileSync('output.txt', statement); // appending the statement to a file
			console.log(statement);
			this.state.change(new file.Producer(this.state, this.mainProduct)); // changing the state
		};
	}
}

const file = require('../../Handlers/files');

module.exports = Recycler;
