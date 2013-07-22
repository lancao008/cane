(function() {
  function Layer(game) {
    Cane.Group.call(this, game);
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rotation = 0;
    this.scale = 1;
    this.context = game.context;
  }

  Layer.prototype = Object.create(Cane.Group.prototype);

  Layer.prototype.transformAndDraw = function() {
    this.context.save();
    if(this.x != 0 || this.y != 0) this.context.translate(this.x, this.y);
    if(this.rotation != 0) this.context.rotate(this.rotation);
    if(this.scale != 1) this.context.scale(this.scale, this.scale);
    this.draw();
    this.context.restore();
  };

  Cane.Layer = Layer;
})();
