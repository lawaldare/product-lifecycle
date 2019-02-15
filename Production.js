var Production = function () {
  var currentState = new Producer(this);

  this.change = function (state) {
      currentState = state;
      currentState.go();
  };

  this.start = function () {
      currentState.go();
  };
}