Cane.Vector2 = function(component0, component1) {
  this[0] = component0;
  this[1] = component1;
};

Cane.Vector2.prototype = {
  add: function(vector) {
    var component0 = this[0] + vector[0];
    var component1 = this[1] + vector[1];
    var result = new Cane.Vector2(component0, component1);
    return result;
  },
  subtract: function(vector) {
    var component0 = this[0] - vector[0];
    var component1 = this[1] - vector[1];
    var result = new Cane.Vector2(component0, component1);
    return result;
  },
  divide: function(factor) {
    var component0 = this[0]/factor;
    var component1 = this[1]/factor;
    var result = new Cane.Vector2(component0, component1);
    return result;
  },
  normalize: function() {
    return this.divide(this.getLength());
  },
  clone: function() {
    var vector = new Cane.Vector2(this[0], this[1]);
    return vector;
  },
  multiply: function(scalar) {
    var vector = new Cane.Vector2(
      this[0]*scalar,
      this[1]*scalar
    );
    return vector;
  },
  isEqual: function(vector) {
    return(
      this[0] == vector[0] &&
      this[1] == vector[1]
    );
  },
  round: function() {
    var vector = new Cane.Vector2(
      Math.round(this[0]),
      Math.round(this[1])
    );
    return vector;
  },
  getLength: function() {
    var squareSum = Math.pow(this[0], 2) + Math.pow(this[1], 2);
    return Math.sqrt(squareSum);
  },
  isZero: function() {
    return this[0] == 0 && this[1] == 0;
  },
  floor: function() {
    var vector = new Cane.Vector2(
      Math.floor(this[0]),
      Math.floor(this[1])
    );
    return vector;
  }
};

Cane.Vector2.zero = function() {
  var vector = new Cane.Vector2(0, 0);
  return vector;
};
