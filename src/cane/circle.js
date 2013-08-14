Cane.Circle = function(position, radius) {
  Cane.Shape.call(this, position);
  this.radius = radius;
};

Cane.Circle.prototype = Object.create(Cane.Shape.prototype);

Cane.Circle.prototype.move = function(translation) {
  var newPosition = this.position.add(translation);
  var newCircle = new Cane.Circle(newPosition, this.radius);
  return newCircle;
};
