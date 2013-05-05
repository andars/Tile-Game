var Player = function(img){
	Entity.call(this);
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
	