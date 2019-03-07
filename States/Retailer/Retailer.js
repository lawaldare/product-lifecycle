const fs = require('fs');

class Retailer { //Retailer constructor for the Retailer state
	constructor(state, mainProduct, link) {
		this.state = state;
		this.mainProduct = mainProduct;
		this.go =  async function() { //method to change the state
			const statement = `${this.mainProduct} has been given to Consumer\n`;
			await fs.appendFileSync('output.txt', statement); //appending the statement to a file
			console.log(statement);
			this.state.change(new file.Consumer(this.state, this.mainProduct)); //changing the state
		};
	}
}

const file = require('../../Handlers/files');

module.exports = Retailer;
