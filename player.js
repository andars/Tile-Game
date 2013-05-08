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
		var dist = Math.round(this.speed/1000*time);
		var dx, dy;
		if (handler.actions.down){
			
			dy += dist;
			
		}
		if (handler.actions.up){
			
			dy -= dist;
		
		}
		if (handler.actions.right){
		
			dx += dist;
		}
		if (handler.actions.left){
			
			dx -= dist;
		}
		if (!level.getTile(this.pos.x/TILE_DIM,this.pos.y/TILE_DIM).blocks){
			this.pos.x += dx;
			this.pos.y += dy;
		}
	},
	render: function(ctx, ){
	
		ctx.drawImage(this.img, this.pos.x-this.pos.x-(CANVAS_WIDTH>>1), this.pos.y-this.pos.y-(CANVAS_HEIGHT>>1));
	}
};
	
