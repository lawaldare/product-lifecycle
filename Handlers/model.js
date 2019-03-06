function Model() {
	this.observers = {};
	this.registerObserver = function(event, observer) {
		this.observers[event] = this.observers[event] || [];
		this.observers[event].push(observer);
	};
	this.notifyAll = function(event, product) {
		if (this.observers[event]) {
			this.observers[event].forEach(function(observer) {
				observer.goTo(product);
			});
		}
	};
}

module.exports = Model;
