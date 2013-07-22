function WelcomeScene(options) {
  Cane.Scene.call(this, options);

  this.marioSprite = this.buildSprite('mario');
  this.luigiSprite = this.buildSprite('sub_dir/luigi');

  this.marioSprite.y = 200;
  this.luigiSprite.y = 200;
  this.luigiSprite.x = 100;

  this.direction = 1;
  this.myX = 0;

  this.myGroup = this.buildGroup(MyGroup, { secretMessage: 'hi My GROUP!' });
  this.myGroup.x = 100;

  this.runSprite = this.buildSprite();
  this.runSprite.x = 50;
  this.runSprite.y = 50;

  var animationOptions = {
    sheet: this.assets.images.run,
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
}

WelcomeScene.prototype = Object.create(Cane.Scene.prototype);

WelcomeScene.prototype.update = function(timeDelta) {
  Cane.Scene.prototype.update.call(this, timeDelta);

  this.runSprite.x += .4;
  this.runSprite.y += .2;

  this.myX = this.myX+this.direction;
  this.marioSprite.x = this.myX;
  this.marioSprite.rotation = this.myX/20;

  this.myGroup.scale = 0.5 + (this.myX/400);

  if(this.myX == 400) {
    this.direction = -1;
  }
  else if(this.myX == 0) {
    this.direction = 1;
  }

  this.updateLuigiPosition();

  if(this.keyboard.keysPressed.z && this.keyboard.keysPressed.down)
    console.log('z and down pressed at the same time, zomg!');

  if(this.keyboard.keysPressed.space) {
    console.log('space!');
    this.assets.sounds.swish.play();
  }
};

WelcomeScene.prototype.updateLuigiPosition = function() {
  var direction;
  if(this.keyboard.keysPressed.right) {
    direction = 1;
  }
  else if(this.keyboard.keysPressed.left) {
    direction = -1;
  }
  if(direction) this.luigiSprite.x += direction;
}
