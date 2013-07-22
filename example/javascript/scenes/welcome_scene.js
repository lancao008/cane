function WelcomeScene(game) {
  Cane.Scene.call(this, game);

  this.marioSprite = new Cane.Sprite(this.game, 'mario');
  this.luigiSprite = new Cane.Sprite(this.game, 'sub_dir/luigi');

  this.marioSprite.position[1] = 200;
  this.luigiSprite.position[1] = 200;
  this.luigiSprite.position[0] = 100;

  this.direction = 1;
  this.myX = 0;

  this.myGroup = new MyLayer(this.game, 'hi My GROUP!');
  this.myGroup.position[0] = 100;

  this.runSprite = new Cane.Sprite(this.game);
  this.runSprite.position[0] = 50;
  this.runSprite.position[1] = 50;

  var animationOptions = {
    sheet: this.game.assets.images.run,
    fps: 15,
    framesCount: 15
  };
  var runAnimation = new Cane.Animation(animationOptions);
  this.runSprite.animation = runAnimation;

  this.marioSprite.z = 100;
  this.luigiSprite.z = 102;

  this.addChild(this.marioSprite);
  this.addChild(this.myGroup);
  this.addChild(this.luigiSprite);
  this.addChild(this.runSprite);

  this.game.mouse.on('click', function() {
    console.log('Clicked!', this.game.mouse.position[0], this.game.mouse.position[1]);
  }.bind(this))
}

WelcomeScene.prototype = Object.create(Cane.Scene.prototype);

WelcomeScene.prototype.update = function(timeDelta) {
  Cane.Scene.prototype.update.call(this, timeDelta);

  this.runSprite.position[0] += .4;
  this.runSprite.position[1] += .2;

  this.myX = this.myX+this.direction;
  this.marioSprite.position[0] = this.myX;
  this.marioSprite.rotation = this.myX/20;

  this.myGroup.scale = 0.5 + (this.myX/400);

  if(this.myX == 400) {
    this.direction = -1;
  }
  else if(this.myX == 0) {
    this.direction = 1;
  }

  this.updateLuigiPosition();

  if(this.game.keyboard.keysPressed.z && this.keyboard.keysPressed.down)
    console.log('z and down pressed at the same time, zomg!');

  if(this.game.keyboard.keysPressed.space) {
    console.log('space!');
    this.game.assets.sounds.swish.play();
  }
};

WelcomeScene.prototype.updateLuigiPosition = function() {
  var direction;
  if(this.game.keyboard.keysPressed.right) {
    direction = 1;
  }
  else if(this.game.keyboard.keysPressed.left) {
    direction = -1;
  }
  if(direction) this.luigiSprite.position[0] += direction;
}
