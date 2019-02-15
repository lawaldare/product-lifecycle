var Recycler = function (product) {
  this.product = product;

  this.go = function () {
      log.add("Recycler has recycled the product for the Producer");
      product.change(new Producer(product));
  }
};




module.export = Recycler;