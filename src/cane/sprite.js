(function() {
  function Sprite(game, path) {
    Cane.Layer.call(this, game);
    if(path) this.image = game.assets.images[path];
  }

  Sprite.prototype = Object.create(Cane.Layer.prototype);

  Sprite.prototype.update = function(timeDelta) {
    if(this.animation) {
      this.animation.update(timeDelta);
      this.image = this.animation.image;
    }
  };

  Sprite.prototype.draw = function() {
    this.context.drawImage(this.image, -this.image.width/2, -this.image.height/2);
  };

  Cane.Sprite = Sprite;
})();
