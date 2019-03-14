const file = require('../Handlers/files');

function ObserverModel() { //Observer constructor
	this.observers = {}; //observer object
	this.registerObserver = function(event, observer) { //adding the observer with its state
		this.observers[event] = this.observers[event] || [];
		this.observers[event].push(observer); //pushing to an array
	};
	this.notifyAll = function(event, product) { //notifying all the observers
		if (this.observers[event]) {
			this.observers[event].forEach(function(observer) {
				observer.goTo(product); // invoking their method
			});
		}
	};
}


const model = new ObserverModel(); //an instance of the observer constructor

const producerObserver = new file.ProducerObserver();
const retailerObserver = new file.RetailerObserver();
const consumerObserver = new file.ConsumerObserver();
const recyclerObserver = new file.RecyclerObserver();

model.registerObserver('Producer', producerObserver);
model.registerObserver('Retailer', retailerObserver);
model.registerObserver('Consumer', consumerObserver);
model.registerObserver('Recycler', recyclerObserver);

 async function started(product, event) {// notifying function
	 await model.notifyAll(event, product);
}


module.exports = started;
