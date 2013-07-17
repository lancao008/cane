(function() {
  function AssetManager(delegate, container) {
    this.delegate = delegate
    this.container = container;
    this.loaders = []
    this.loadersCompleted = 0

    this.setupLoader('images', Cane.ImageLoader)
    this.setupLoader('sounds', Cane.SoundLoader)
    this.setupLoader('texts', Cane.TextLoader)
  }
  AssetManager.prototype = {
    load: function() {
      this.loaders.forEach(function(loader) {
        loader.start()
      })
    },
    setupLoader: function(name, Constructor) {
      if(!this.container[name]) this.container[name] = {};
      var loader = new Constructor(this, this.container[name])
      this.loaders.push(loader)
      this[name] = loader
    },
    loaderComplete: function(loader) {
      this.loadersCompleted++
      if(this.loadersCompleted == this.loaders.length) this.delegate.loadingComplete()
    }
  }

  Cane.AssetManager = AssetManager
})()
