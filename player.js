var Player = function(img){
	
	this.img = new Image();
	this.img.src = ROOT+img;
	this.pos = {
		x:CANVAS_WIDTH/2,
		y:CANVAS_HEIGHT/2
	};
	this.speed = 1;
	
};

Player.prototype = {
	update: function(time, level){
		if (handler.actions['down']){
			console.log("update");
			level.miny += this.speed*time;
		}
		if (handler.actions['up']){
			console.log("update");
			level.miny -= this.speed*time;
		}
		if (handler.actions['right']){
			console.log("update");
			level.minx += this.speed*time;
		}
		if (handler.actions['left']){
			console.log("update");
			level.minx -= this.speed*time;
		}
	},
	render: function(ctx){
		ctx.drawImage(this.img, this.pos.x, this.pos.y);
	}
};
	
