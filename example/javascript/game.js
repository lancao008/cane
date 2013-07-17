function Game(options) {
  Cane.Game.call(this, options)
  this.assets = {}
  this.scene = this.buildScene(LoadingScene)
}
Game.prototype = Object.create(Cane.Game.prototype)

Game.prototype.pickNextScene = function() {
  return this.buildScene(WelcomeScene)
}
