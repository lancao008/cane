(function() {
  function Game(options) {
    this.canvas = options.document.createElement('canvas');
    this.canvas.width = options.width;
    this.canvas.height = options.height;
    this.context = this.canvas.getContext('2d');
    this.keyboard = new Cane.Keyboard(options.document);
    this.mouse = new Cane.Mouse(options.document, this.canvas);
    this.assets = {};
    this.clearColor = 'lightgray';
  }

  Game.prototype = {
    nextTick: function() {
      requestAnimationFrame(this.tick.bind(this));
    },
    tick: function(timestamp) {
      if(this.lastTickAt) {
        var timeDelta = timestamp - this.lastTickAt;
        this.update(timeDelta);
        this.draw(timeDelta);
      }
      this.lastTickAt = timestamp;
      this.nextTick();
    },
    start: function() {
      this.nextTick();
    },
    update: function(timeDelta) {
      if(this.scene.completed) this.scene = this.pickNextScene();
      this.scene.update(timeDelta);
    },
    draw: function(timeDelta) {
      this.clear();
      this.scene.draw(timeDelta);
    },
    clear: function() {
      this.context.fillStyle = this.clearColor;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  };

  Cane.Game = Game;
})();
