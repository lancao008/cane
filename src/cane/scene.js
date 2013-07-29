(function() {
  function Scene(game) {
    Cane.Group.call(this, game);
  }
  Scene.prototype = Object.create(Cane.Group.prototype);

  Scene.prototype.handleClick = function(position) {
    var child = this.getChildAt(position);
    if(child) {
      if(child.click) child.click(position);
    }
  }

  Cane.Scene = Scene;
})();
