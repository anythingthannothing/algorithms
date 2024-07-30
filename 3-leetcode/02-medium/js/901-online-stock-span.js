var StockSpanner = function () {
  this.stack = [];
};

StockSpanner.prototype.next = function (price) {
  let span = 1;
  while (
    this.stack.length > 0 &&
    this.stack[this.stack.length - 1].price <= price
  ) {
    let popped = this.stack.pop();
    span += popped.span;
  }
  this.stack.push({ price: price, span: span });
  return span;
};
