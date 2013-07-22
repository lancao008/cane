(function() {
  function Scene(game) {
    Cane.Group.call(this, game);
  }
  Scene.prototype = Object.create(Cane.Group.prototype);

  Cane.Scene = Scene;
})();
