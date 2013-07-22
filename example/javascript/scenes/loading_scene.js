function LoadingScene(game) {
  Cane.Scene.call(this, game);
  this.assetManager = new Cane.AssetManager(this, game.assets);
  this.addSounds();
  this.addImages();
  this.addTexts();
  this.assetManager.load();
}

LoadingScene.prototype = Object.create(Cane.Scene.prototype);

LoadingScene.prototype.loadingComplete = function() {
  this.completed = true;
};

LoadingScene.prototype.addSounds = function() {
  var sounds = this.assetManager.sounds;
  sounds.prefix = './sounds/';
  sounds.suffix = '.ogg';
  sounds.add('swish');
}

LoadingScene.prototype.addImages = function() {
  var images = this.assetManager.images;
  images.prefix = './images/';
  images.suffix = '.png';
  images.add('mario');
  images.add('run');
  images.add('sub_dir/luigi');
};

LoadingScene.prototype.addTexts = function() {
  var texts = this.assetManager.texts;
  texts.prefix = './texts/';
  texts.suffix = '.txt';
  texts.add('my_level');
};
