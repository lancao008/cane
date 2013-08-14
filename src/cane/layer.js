(function() {
  function Layer(game) {
    Cane.Group.call(this, game);
    this.position = new Cane.Vector2(0, 0);
    this.z = 0;
    this.rotation = 0;
    this.anchor = new Cane.Vector2(0, 0);
    this.scale = 1;
    this.clickable = true;
    this.context = game.context;
    this.size = new Cane.Vector2(0, 0);
  }

  Layer.prototype = Object.create(Cane.Group.prototype);

  Layer.prototype.transformAndDraw = function() {
    this.context.save();
    if(this.position[0] != 0 || this.position[1] != 0) this.context.translate(this.position[0], this.position[1]);
    if(this.rotation != 0) this.context.rotate(this.rotation);
    if(this.scale != 1) this.context.scale(this.scale, this.scale);
    this.draw();
    this.context.restore();
  };

  Layer.prototype.getOffset = function() {
    var offset = new Cane.Vector2(
      this.position[0] - this.size[0]*this.anchor[0],
      this.position[1] - this.size[1]*this.anchor[1]
    );

    return offset;
  }

  Layer.prototype.getRectangle = function() {
    var rectangle = new Cane.Rectangle(this.getOffset(), this.size);
    return rectangle;
  };

  Cane.Layer = Layer;
})();
