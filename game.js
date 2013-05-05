var CANVAS_WIDTH, CANVAS_HEIGHT;
var ROOT = "https://raw.github.com/andars/Tile-Game/port/";
var game = {
	
	init: function(){
		CANVAS_WIDTH = document.getElementById('gamecanvas').width,
		CANVAS_HEIGHT = document.getElementById('gamecanvas').height;
		
		game.ctx = document.getElementById('gamecanvas').getContext('2d');
		game.player = new Player("player.png");
		game.level = new Level(game.ctx);
		handler.init();
	},
	loop: function(time){
		game.delta = time - game.lasttime;
		game.render();
		game.update(game.delta);
		window.requestAnimationFrame(game.loop);
		game.lasttime = time;
	},
	render: function(){
		game.level.render();
		game.player.render(game.ctx);
	},
	update: function(time){
		game.level.update(time);
		game.player.update(time,game.level);
	}	
		
};

(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();
function start(){
	game.init();
	game.loop();
}
