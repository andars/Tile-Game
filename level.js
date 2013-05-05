var MAP_WIDTH = 50,
	MAP_HEIGHT = 50;
	
var Level = function(ctx){
	this.map = Uint16Array(MAP_WIDTH*MAP_HEIGHT);
	this.minx = 0, this.miny = 0;
	this.tiles = [];
	this.entities = [];
	this.ctx = ctx;
	
}
Level.prototype = {
	getTile: function(x,y){
		return this.tiles[this.map[x * MAP_WIDTH + y]];
	},
	
	load: function(name){
		this.img = 
		this.tiles[0] = new Tile(0,0, 'grass');
		this.tiles[1] = new Tile(50,0, 'tree');
		this.tiles[2] = new Tile(100,0, 'rocktop');
		this.tiles[3] = new Tile(150,0, 'rock');
	},
	update: function(time){
		for (var i = 0; i < this.entities.length; i++){
			this.entities[i].update(time);
		}
	},
	render: function(){
		for (var i = this.minx/50; i < MAP_WIDTH; i++){
			if (i * TILE_DIM + TILE_DIM <= this.minx || i*TILE_DIM>(this.minx+CANVAS_WIDTH))
				continue;
			for (var j = this.miny/50; j<MAP_HEIGTH; j++){
				if (k*TILE_DIM+TILE_DIM< this.miny || k*TILE_DIM> this.miny+600)
					continue;
				this.getTile(i,j).draw(this.ctx, this.img, i * TILE_DIM - this.minx, j * TILE_DIM - this.miny);
			}
		}
	}
};