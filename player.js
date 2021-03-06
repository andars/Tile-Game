var Player = function(img){
	
	this.img = new Image();
	this.img.src = ROOT+img;
	this.pos = {
		x:400,
		y:300
	};

	this.speed = 80;

};

Player.prototype = {
	update: function(time, level){
		var dist = Math.round(this.speed*time/1000);
		//console.log(dist);
		var dx=0, dy=0;
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
		this.move(dx,dy,level);
	},
	render: function(ctx ){
	
		ctx.drawImage(this.img, this.pos.x-(this.pos.x-(CANVAS_WIDTH>>1)), this.pos.y-(this.pos.y - (CANVAS_HEIGHT>>1)));
	},
	move: function(dx, dy,level){
		var tx0 = (this.pos.x+dx)/TILE_DIM|0,
			tx1 = (this.pos.x+50+dx)/TILE_DIM|0,
			ty0 = (this.pos.y+dy)/TILE_DIM|0;
		if (level.getTile(tx0,ty0).blocks) return;
		if (level.getTile(tx1,ty0).blocks) return;
		this.pos.x += dx;
		this.pos.y += dy;
	}
};
	
