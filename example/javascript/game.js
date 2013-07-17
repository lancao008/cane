function Game(options) {
  Cane.call(this, options)
  this.addImages()
  this.addSounds()
  this.addTexts()
  this.scene = this.buildScene(LoadingScene)
}
Game.prototype = Object.create(Cane.prototype)

Game.prototype.update = function(timeDelta) {
  if(this.loaded && !(this.scene instanceof WelcomeScene))
    this.scene = this.buildScene(WelcomeScene)
  Cane.prototype.update.call(this, timeDelta)
}
Game.prototype.addSounds = function() {
  var sounds = this.assets.sounds
  sounds.prefix = './sounds/'
  sounds.suffix = '.ogg'
  sounds.add('swish')
}
Game.prototype.addImages = function() {
  var images = this.assets.images
  images.prefix = './images/'
  images.suffix = '.png'
  images.add('mario')
  images.add('run')
  images.add('sub_dir/luigi')
}
Game.prototype.addTexts = function() {
  var texts = this.assets.texts
  texts.prefix = './texts/'
  texts.suffix = '.txt'
  texts.add('my_level')
}
