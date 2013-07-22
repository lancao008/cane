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
    var isGroup = layer instanceof Cane.Group;
    if(!isGroup) throw new Error('Only Cane.Group objects can be added as a child.');
    this.children.push(layer);
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
