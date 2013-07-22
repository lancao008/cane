function Game(options) {
  Cane.Game.call(this, options);
  this.scene = new LoadingScene(this);
}
Game.prototype = Object.create(Cane.Game.prototype);

Game.prototype.pickNextScene = function() {
  var scene = new WelcomeScene(this);
  return scene;
};
