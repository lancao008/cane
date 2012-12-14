(function() {
  function Layer(options) {
    if(!options) throw new Exception("Group wasn't given any options.")
    if(!options.context) throw new Exception('Layer was not given a context.')
    this.context = options.context
    this.x = 0
    this.y = 0
    this.z = 0
    this.rotation = 0
    this.scale = 1
  }

  Layer.prototype = {
    drawImage: function(image, x, y) {
      this.context.drawImage(image, x, y)
    },
    transformAndDraw: function() {
      this.context.save()
      if(this.x != 0 || this.y != 0) this.context.translate(this.x, this.y)
      if(this.rotation != 0) this.context.rotate(this.rotation)
      if(this.scale != 1) this.context.scale(this.scale, this.scale)
      this.draw()
      this.context.restore()
    }
  }

  Cane.Layer = Layer
})()
