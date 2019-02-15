var Retailer = function (product) {
  this.product = product;

  this.go = function () {
      log.add("Retailer has given the Consumer the product");
      product.change(new Consumer(product));
  }
};




module.exports = Retailer;