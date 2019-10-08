Array.prototype.indexOf = function(val) {
  return this.findIndex(element => element == val);
};

Array.prototype.formatElement = function(fn) {
  return this.map(element => fn(element));
};
