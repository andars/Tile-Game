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
		if (handler.actions['down']){
			console.log("update");
			level.miny += this.speed/1000*time;
		}
	},
	render: function(ctx){
		ctx.drawImage(this.img, this.pos.x, this.pos.y);
	}
};
	
