Cane.Frame = function(width, height) {
  Cane.Vector2.call(this, width, height);
};

Cane.Frame.prototype = Object.create(Cane.Vector2.prototype);

Cane.Frame.prototype.contains = function(point) {
  var result = (
    0 <= point[0] &&
    this[0] > point[0] &&
    0 <= point[1] &&
    this[1] > point[1]
  );
  return result;
};
