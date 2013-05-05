console.log(document.getElementById("gamecanvas"));
var CANVAS_WIDTH = document.getElementById("gamecanvas").width,
	CANVAS_HEIGHT = document.getElementById("gamecanvas").height;
	
var game = {
	
	init: function(){
		game.ctx = document.getElementById("gamecanvas").getContext('2d');
		game.player = new Player("player.png");
		game.level = new Level(ctx);
	},
	loop: function(time){
		game.render();
		game.update(time);
		window.requestAnimationFrame(loop);
	},
	render: function(){
		game.level.render();
		game.player.render(game.ctx);
	},
	update: function(time){
		game.level.update(time);
	}	
		
};

(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

game.init();
game.loop();