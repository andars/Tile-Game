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
		if (handler.actions['down']){
			console.log("update");
			if (this.pos.y+level.miny<CANVAS_HEIGHT)
				this.pos.y += dist;
			else{
				level.miny += dist;
			
			}
		}
		if (handler.actions['up']){
			console.log("update");
			if (this.pos.y+level.miny<CANVAS_HEIGHT)
				this.pos.y -= dist;
			else{
				level.miny -= dist;
			
			}
			
		}
		if (handler.actions['right']){
			console.log("update");
			level.minx += this.speed/1000*time;
		}
		if (handler.actions['left']){
			console.log("update");
			level.minx -= this.speed/1000*time;
		}
	},
	render: function(ctx){
		ctx.drawImage(this.img, this.pos.x, this.pos.y);
	}
};
	
