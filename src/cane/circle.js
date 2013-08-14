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

Cane.Circle.prototype.toRectangle = function() {
  var position = this.position.subtract(new Cane.Vector2(this.radius, this.radius));
  var size = new Cane.Vector2(this.radius*2, this.radius*2);
  var rectangle = new Cane.Rectangle(position, size);
  return rectangle;
};
