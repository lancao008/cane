Cane.FrameWithOffset = function(position, size) {
  this.position = position;
  this.size = size;
};

Cane.FrameWithOffset.prototype = {
  contains: function(point) {
    var result = (
      this.position[0] <= point[0] &&
      this.position[0]+this.size[0] > point[0] &&
      this.position[1] <= point[1] &&
      this.position[1]+this.size[1] > point[1]
    );
    return result;
  }
};
