var Consumer = function (product) {
  this.product = product;

  this.go = function () {
      log.add("Consumer has used the product for Recycler");
      product.change(new Recycler(product));
  }
};




module.exports = Consumer;