var Producer = function (product) {
  this.product = product;

  this.go = function () {
      log.add("Producer has given the Retailer the product");
      product.change(new Retailer(product));
  }
};



module.exports = Producer;