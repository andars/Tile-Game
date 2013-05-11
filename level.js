var MAP_WIDTH = 50,
	MAP_HEIGHT = 50;
	
var Level = function(ctx){
	this.map = new Uint16Array(MAP_WIDTH*MAP_HEIGHT);
	this.minx = 0, this.miny = 0;
	this.tiles = [];
	this.entities = [];
	this.gamectx = ctx;
	
	this.loaded = false;
	this.htiles = Math.ceil(CANVAS_WIDTH/TILE_DIM);
	this.vtiles = Math.ceil(CANVAS_HEIGHT/TILE_DIM);
	this.mapcanvas = document.createElement('canvas');
	this.mapcanvas.width= MAP_WIDTH * TILE_DIM;
	this.mapcanvas.height = MAP_WIDTH * TILE_DIM;
	this.mapctx = this.mapcanvas.getContext('2d');
	this.dirtymap = true;
	this.load("abc");
}
Level.prototype = {
	getTile: function(x,y){
		return this.tiles[this.map[y * MAP_WIDTH + x]];
	},
	setTile: function(x,y,id){
		this.map[y*MAP_WIDTH+x]=id;
	},
	
	load: function(name){
		var that = this;
		this.img = new Image();
		this.img.src = ROOT + "tileset.png";
		this.tiles[1] = new Tile(32,32, 'grass', false);
		this.tiles[4] = new Tile(256,0, 'tree',true);
		this.tiles[2] = new Tile(160,32, 'rock', true);
		
		for (var i = 0; i < this.map.length; i++){
			this.map[i] = 0;
		}
		var levelreq = new XMLHttpRequest();
		levelreq.onload = function(){
			var lev = JSON.parse(this.responseText);
			for (var i = 0; i<that.map.length; i++){
				that.map[i]=lev.layers[0].data[i];
				if (that.map[i]>4){
					that.map[i]=1;
				}
			}
			that.loaded = true;
			
		}
		levelreq.open('get','./'+'map.json',true);
		levelreq.send();
	},
	update: function(time){
		for (var i = 0; i < this.entities.length; i++){
			this.entities[i].update(time);
		}
	},
	rendermap: function(){
		if (!this.loaded) return;
		//console.log(this.miny);
		//>0?game.player.pos.x-(CANVAS_WIDTH>>1):0;
		/*var i = Math.floor(this.minx/TILE_DIM);
		var h_end= i +this.htiles;
		var j, v_end;*/
		 //i = i<0?0:i;
		for (var i =0; i < MAP_WIDTH; i++){
			/*
			if (i * TILE_DIM + TILE_DIM <= this.minx || i*TILE_DIM>(this.minx+CANVAS_WIDTH))
				continue;
			//Math.round(this.miny/50)>=1?Math.round(this.minx/50)-1:0;
			j = Math.floor(this.miny/TILE_DIM);
			v_end = j +this.vtiles;
			//j = j<0?0:j;
			*/
			for (var j = 0; j < MAP_HEIGHT; j++){
				/*
				if (j * TILE_DIM+(TILE_DIM*2) < this.miny || j * TILE_DIM > this.miny + CANVAS_HEIGHT)
					continue;
				*/
				if (this.getTile(i,j)===undefined){
					console.log(i+','+j);
				}	

				this.getTile(i,j).draw(this.mapctx, this.img, (i * TILE_DIM), (j * TILE_DIM), this, i, j);

			}
		}
		this.dirtymap = false;
		
	},
	render:function(){
		if (!this.loaded) return;
		if (this.dirtymap){
			this.rendermap();
			
		}
		this.miny = game.player.pos.y-(CANVAS_HEIGHT>>1);
		this.minx = game.player.pos.x-(CANVAS_WIDTH>>1);
		this.gamectx.drawImage(this.mapcanvas,this.minx, this.miny, CANVAS_WIDTH, CANVAS_HEIGHT, 0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
	}
};
