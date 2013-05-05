var TILE_DIM = 50;

var Tile = function(x,y,id){
	this.drawx = x, this.drawy = y;
	this.id = id;
};
Tile.prototype = {
	draw: function(ctx,img,x,y){
		ctx.drawImage(img,this.drawx,this.drawy,TILE_DIM,TILE_DIM,x,y, TILE_DIM, TILE_DIM);
	}
};