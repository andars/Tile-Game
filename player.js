var Player = function(img){
	
	this.img = new Image();
	this.img.src = img;
	
};

Player.prototype = {
	update: function(time){
	},
	render: function(ctx){
		ctx.drawImage(this.img, this.pos.x, this.pos.y);
	}
};
	