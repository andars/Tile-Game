var TILE_DIM = 50;

var Tile = function(x,y,id){
	this.drawx = x, this.drawy = y;
	this.id = id;
	this.split = true;
};
Tile.prototype = {
	draw: function(ctx,img,x,y,level, tx, ty){
		
		if (this.split){
			var n = !level.getTile(tx, ty-1).id == this.id;
			var s = !level.getTile(tx, ty+1).id == this.id;
			var w = !level.getTile(tx-1, ty).id == this.id;
			var e = !level.getTile(tx+1, ty).id == this.id;
			if (n||s||w||e){
				//northwest
				ctx.drawImage(img, this.drawx + w?0:(-TILE_DIM/2), this.drawy + n?0:(-TILE_DIM/2), TILE_DIM/2,TILE_DIM/2,x,y,TILE_DIM/2,TILE_DIM/2);
				//southwest
				ctx.drawImage(img, this.drawx + w?0:(-TILE_DIM/2), this.drawy + s?0:(TILE_DIM), TILE_DIM/2, TILE_DIM/2, x, y,TILE_DIM/2,TILE_DIM/2);
				//northeast
				ctx.drawImage(img, this.drawx + e?0:(TILE_DIM), this.drawy + n?0:(-TILE_DIM/2), TILE_DIM/2, TILE_DIM/2, x, y, TILE_DIM/2, TILE_DIM/2);
				//southwest
				ctx.drawImage(img, this.drawx + e?0:(TILE_DIM), this.drawy + s)
			}
		}
		ctx.drawImage(img,this.drawx,this.drawy,TILE_DIM,TILE_DIM,x,y, TILE_DIM, TILE_DIM);
	}
};
