var Cane = {};

Cane.Shape = function(position) {
  this.position = position;
};

Cane.Shape.prototype = {
  move: function(translation) {
    var newPosition = this.position.add(translation);
    console.log(this.constructor);
    asdf();
  }
};


Cane.Circle = function(position, radius) {
  Cane.Shape.call(this, position);
  this.radius = radius;
};

Cane.Circle.prototype = Object.create(Cane.Shape.prototype);
Cane.Circle.prototype.constructor = Cane.Circle;

var c = new Cane.Circle(1, 2);

console.log(c.constructor.toString());