(function() {
  var options = {
    width: 600,
    height: 400,
    document: document
  };
  function initialize() {
    var game = new Game(options);
    document.body.appendChild(game.canvas);
    game.start();
  }
  window.addEventListener('load', initialize);
})();
