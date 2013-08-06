Cane.FrameWithOffset = function(position, size) {
  this.position = position;
  this.frame = new Cane.Frame(size);
};

Cane.FrameWithOffset.prototype = {
  contains: function(point) {
    var pointWithOffset = point.subtract(this.position);
    var result = this.frame.contains(pointWithOffset);
    return result;
  }
};
