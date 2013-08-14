Cane.Rectangle = function(position, size) {
  Cane.Shape.call(this, position);
  this.size = size;
};

Cane.Rectangle.prototype = Object.create(Cane.Shape.prototype);
Cane.Rectangle.prototype.constructor = Cane.Rectangle;

Cane.Rectangle.prototype.contains = function(point) {
  var result = (
    this.position[0] <= point[0] &&
    this.position[0] + this.size[0] > point[0] &&
    this.position[1] <= point[1] &&
    this.position[1] + this.size[1] > point[1]
  );
  return result;
};
