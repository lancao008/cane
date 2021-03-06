(function() {
  function ImageLoader(delegate, container) {
    Cane.Loader.call(this, delegate, container);
  }
  ImageLoader.prototype = Object.create(Cane.Loader.prototype);

  ImageLoader.prototype.load = function(shortPath, fullPath) {
    var image = new Image();
    image.onload = function() {
      this.assetLoaded(shortPath, image);
    }.bind(this);
    image.src = fullPath;
    return image;
  };

  Cane.ImageLoader = ImageLoader;
})();
