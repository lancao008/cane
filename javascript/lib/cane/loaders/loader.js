(function() {
  function Loader(delegate) {
    this.delegate = delegate
    this.shortPaths = []
    this.filesCompleted = 0
  }
  Loader.prototype = {
    add: function(shortPath) {
      if(this.loadStarted) throw new Error("You can't add files after a loader has started loading.")
      this.shortPaths.push(shortPath)
    },
    start: function() {
      this.loadStarted = true
      this.shortPaths.forEach(this.loadShortPath.bind(this))
    },
    loadShortPath: function(shortPath) {
      var fullPath = this.prefix + shortPath + this.suffix
      this.load(shortPath, fullPath)
    },
    assetLoaded: function(shortPath, asset) {
      this[shortPath] = asset
      this.filesCompleted++
      if(this.filesCompleted == this.shortPaths.length) this.complete()
    },
    complete: function() {
      this.delegate.loaderComplete(this)
    }
  }

  Cane.Loader = Loader
})()
