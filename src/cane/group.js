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

  Group.prototype.removeChild = function(layer) {
    var index = this.children.indexOf(layer);
    if(index == -1) throw new Error('Layer not found. Cannot remove.');
    this.children.splice(index, 1);
  };

  Group.prototype.getChildAt = function(position) {
    var child, offset, grandChild;
    for(var i=this.children.length-1; 0<=i; i--) {
      child = this.children[i];

      if(child.getFrameWithOffset().contains(position)) {
        grandChild = child.getChildAt(position.subtract(child.getOffset()));
        if(grandChild) {
          return grandChild;
        }
        else if(child.clickable) {
          return child;
        }
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
