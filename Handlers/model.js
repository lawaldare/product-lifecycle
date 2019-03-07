function Model() { //Observer contructor
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

module.exports = Model;
