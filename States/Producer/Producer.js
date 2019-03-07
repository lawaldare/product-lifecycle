const fs = require('fs');
const stopper = require('../../Handlers/check');

class Producer { //Producer constructor for the Producer state
	constructor(state, mainProduct, link) {
		this.state = state;
		this.mainProduct = mainProduct;
		const statement = `${this.mainProduct} has been given to Retailer\n`;
		this.go =  async function() { //method that change the state
			await fs.appendFileSync('output.txt', statement); //appending the statement to a file
			console.log(statement);
			if(stopper == null) this.state.change(new file.Retailer(this.state, this.mainProduct)); //change the state and it stops the production after the last product passed the recycler.
		};
	}
}

const file = require('../../Handlers/files');

module.exports = Producer;
