function MyGroup(options) {
  Cane.Group.call(this, options);
  this.marioSprite = this.buildSprite('mario');
  this.luigiSprite = this.buildSprite('sub_dir/luigi');

  this.addChild(this.marioSprite);
  this.addChild(this.luigiSprite);

  console.log('Secret: ' + options.secretMessage);

  this.i = 0;
  this.direction = 1;
}
MyGroup.prototype = Object.create(Cane.Group.prototype);

MyGroup.prototype.update = function() {
  this.i += this.direction;
  this.y = this.i+100;

  if(this.i == 50) {
    this.direction = -1;
  }
  else if(this.i == 0) {
    this.direction = 1;
  }
};
