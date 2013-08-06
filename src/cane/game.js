(function() {
  function Game(options) {
    this.canvas = options.document.createElement('canvas');
    this.canvas.width = options.width;
    this.canvas.height = options.height;
    this.context = this.canvas.getContext('2d');
    this.keyboard = new Cane.Keyboard(options.document);
    this.setupMouse(options.document);
    this.assets = {};
    this.clearColor = 'lightgray';
  }

  Game.prototype = {
    nextTick: function() {
      requestAnimationFrame(this.tick.bind(this));
    },
    tick: function(timestamp) {
      var timeDelta;
      if(this.lastTickAt) {
        timeDelta = timestamp - this.lastTickAt;
      } else {
        timeDelta = 0;
      }
      this.update(timeDelta);
      this.draw(timeDelta);
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
    handleClick: function() {
      this.scene.handleClick(this.mouse.position);
    },
    handleHover: function() {
      this.scene.handleHover(this.mouse.position);
    },
    clear: function() {
      this.context.fillStyle = this.clearColor;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    setupMouse: function(document) {
      this.mouse = new Cane.Mouse(document, this.canvas);
      this.mouse.on('click', this.handleClick.bind(this));
      this.mouse.on('move', this.handleHover.bind(this));
    }
  };

  Cane.Game = Game;
})();
