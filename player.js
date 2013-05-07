var Player = function(img){
	
	this.img = new Image();
	this.img.src = ROOT+img;
	this.pos = {
		x:CANVAS_WIDTH/2,
		y:CANVAS_HEIGHT/2
	};

	this.speed = 50;

};

Player.prototype = {
	update: function(time, level){
		var dist = this.speed/1000*time; 
		if (handler.actions.down){
			
			level.miny += dist;
			
		}
		if (handler.actions.up){
			
			level.miny -= dist;
		
		}
		if (handler.actions.right){
			console.log("update");
			level.minx += dist;
		}
		if (handler.actions.left){
			console.log("update");
			level.minx -= dist;
		}
	},
	render: function(ctx){
		ctx.drawImage(this.img, this.pos.x, this.pos.y);
	}
};
	
