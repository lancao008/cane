Cane.Frame = function(size) {
  this.size = size;
};

Cane.Frame.prototype = {
  contains: function(point) {
    var result = (
      0 <= point[0] &&
      this.size[0] > point[0] &&
      0 <= point[1] &&
      this.size[1] > point[1]
    );
    return result;
  }
};
