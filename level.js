var MAP_WIDTH = 50,
	MAP_HEIGHT = 50;
	
var Level = function(ctx){
	this.map = new Uint16Array(MAP_WIDTH*MAP_HEIGHT);
	this.minx = 0, this.miny = 0;
	this.tiles = [];
	this.entities = [];
	this.ctx = ctx;
	this.load("abc");
	
}
Level.prototype = {
	getTile: function(x,y){
		return this.tiles[this.map[y * MAP_WIDTH + x]];
	},
	
	load: function(name){
		var that = this;
		this.img = new Image();
		this.img.src = ROOT + "tileset.png";
		this.tiles[0] = new Tile(50,0, 'tree');
		this.tiles[1] = new Tile(0,0, 'grass');
		this.tiles[2] = new Tile(125,25, 'rock');
		this.tiles[3] = new Tile(150,0, 'rock');
		for (var i = 0; i < this.map.length; i++){
			this.map[i] = 0;
		}
		var levelreq = new XMLHttpRequest();
		levelreq.onload = function(){
			var lev = JSON.parse(this.responseText);
			for (var i = 0; i<that.map.length; i++){
				that.map[i]=lev.layers[0].data[i];
				if (that.map[i]>3){
					that.map[i]=0;
				}
			}
		}
		levelreq.open('get','./'+'map.json',true);
		levelreq.send();
	},
	update: function(time){
		for (var i = 0; i < this.entities.length; i++){
			this.entities[i].update(time);
		}
	},
	render: function(){

		//console.log(this.miny);
		this.miny = this.miny<0?0:this.miny;
		this.minx = this.minx<0?0:this.minx;
		var i = Math.round(this.minx/50)>=1?Math.round(this.minx/50)-1:0;
		
		for (; i < MAP_WIDTH; i++){

			if (i * TILE_DIM + TILE_DIM <= this.minx || i*TILE_DIM>(this.minx+CANVAS_WIDTH))
				continue;
			var j = Math.round(this.miny/50)>=1?Math.round(this.minx/50)-1:0;
			for (; j<MAP_HEIGHT; j++){

				if (j * TILE_DIM+(TILE_DIM*2) < this.miny || j * TILE_DIM > this.miny + CANVAS_HEIGHT)
					continue;

				this.getTile(i,j).draw(this.ctx, this.img, (i * TILE_DIM) - this.minx, (j * TILE_DIM) - this.miny, this, i, j);

			}
		}
	}
};
