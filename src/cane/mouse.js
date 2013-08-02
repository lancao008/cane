Cane.Mouse = function(document, canvas) {
  this.canvas = canvas;

  this.pressed = false;
  this.position = new Cane.Vector2(0, 0);

  document.addEventListener('mousemove', this.move.bind(this));
  canvas.addEventListener('mousedown', this.press.bind(this));
  canvas.addEventListener('mouseup', this.release.bind(this));

  this.document = document;
};

Cane.Mouse.prototype = Object.create(Cane.EventEmitter);

Cane.Mouse.prototype.move = function(e) {
    this.position[0] = event.x-this.canvas.offsetLeft+this.document.body.scrollLeft;
    this.position[1] = event.y-this.canvas.offsetTop+this.document.body.scrollTop;
};

Cane.Mouse.prototype.press = function(event) {
  this.pressed = true;
};

Cane.Mouse.prototype.release = function(event) {
  this.pressed = false;
  this.emit('click');
};
