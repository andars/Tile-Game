var CANVAS_WIDTH, CANVAS_HEIGHT;
var ROOT = "https://raw.github.com/andars/Tile-Game/port/";
var game = {
	
	init: function(){
		CANVAS_WIDTH = document.getElementById('gamecanvas').width,
		CANVAS_HEIGHT = document.getElementById('gamecanvas').height;
		
		game.ctx = document.getElementById('gamecanvas').getContext('2d');
		game.player = new Player("player.png");
		game.level = new Level(game.ctx);
		
		//timing
		game.fps = 60;
		game.then = window.performance.now();
		game.interval = 1000/game.fps;
		handler.init();
	},
	loop: function(time){
		window.requestAnimationFrame(game.loop);
		game.delta = time - game.then;
		if(game.delta>game.interval){	
			game.update(game.delta);
			game.then = time-(game.delta%game.interval);
			game.render();
		}
	},
	render: function(){
		if(game.level.loaded){
			game.ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
			game.level.render();
			game.player.render(game.ctx);
		}
	},
	update: function(time){
		if(game.level.loaded){
		game.level.update(time);
		game.player.update(time,game.level);
		}
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
