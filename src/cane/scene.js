(function() {
  function Scene(options) {
    Cane.Group.call(this, options);
    this.keyboard = options.keyboard;
  }
  Scene.prototype = Object.create(Cane.Group.prototype);
  
  Cane.Scene = Scene;
})();
