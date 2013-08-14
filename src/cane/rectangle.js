Cane.Rectangle = function(position, size) {
  Cane.Shape.call(this, position);
  if(!size) throw new Error('Rectangle needs size.');
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

Cane.Rectangle.prototype.overlaps = function(rectangle) {
  if(!(rectangle instanceof Cane.Rectangle)) throw new Error("Cane.Rectangle#overlaps only supports Cane.Rectangle objects for now.");

  return (
    this.position[0] + this.size[0] >= rectangle.position[0] &&
    this.position[0] + 0 <= rectangle.position[0] + rectangle.size[0] &&
    this.position[1] + this.size[1] >= rectangle.position[1] &&
    this.position[1] + 0 <= rectangle.position[1] + rectangle.size[1]
  );
};
