(function() {
  function Group(game) {
    this.game = game;
    this.children = [];
  }

  Group.prototype = {};

  Group.prototype.reorderChildren = function() {
    this.children.sort(this.sort);
  };

  Group.prototype.sort = function(child1, child2) {
    return child1.z-child2.z;
  };

  Group.prototype.addChild = function(layer) {
    var isLayer = layer instanceof Cane.Layer;
    if(!isLayer) throw new Error('Only Cane.Layer objects can be added as a child.');
    this.children.push(layer);
  };

  Group.prototype.getChildAt = function(position) {
    var child;
    for(var i=0; this.children.length>i; i++) {
      child = this.children[i];
      if(
        child.position[0]-child.size[0]/2 <= position[0] &&
        child.position[0]+child.size[0]/2 > position[0] &&
        child.position[1]-child.size[1]/2 <= position[1] &&
        child.position[1]+child.size[1]/2 > position[1]
      ) {
        return child;
      }
    }
  };

  Group.prototype.draw = function(timeDelta) {
    this.reorderChildren();
    this.children.forEach(function(child) {
      child.transformAndDraw();
    });
  };

  Group.prototype.update = function(timeDelta) {
    this.children.forEach(function(child) {
      if(child.update) child.update(timeDelta);
    });
  };

  Cane.Group = Group;
})();
