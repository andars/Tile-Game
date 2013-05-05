#include "Tile.hpp"
#include "GrassTile.hpp"
#include "TreeTile.hpp"
#include "WaterTile.hpp"
#include "Level.hpp"
Tile::Tile():frame(0){}
Tile::~Tile(){
	
}
Tile::Tile(int id):frame(0){
	
	this->id=(unsigned char) id;
	Tile::tiles[id]=this;
	//img.setTexture(Tile::tex);
}


void Tile::init(){
	tex.create(250,400);
	Tile::tex.loadFromFile("tileset.png");
}

void Tile::draw(int x, int y, Level& level, sf::RenderTarget& window){
	img.setPosition(x,y);
	window.draw(img);
}

void Tile::setSprite(sf::Texture& tex){
	
	img.setTexture(tex);
	

}

bool Tile::isWalkable(){
	
}

void Tile::update(bool anim){}

unsigned char Tile::out(){}

void Tile::nextFrame(){
	frame=(frame+1)%4;
}
Tile* Tile::tiles[64];
GrassTile Tile::grass(0);
TreeTile Tile::tree(1);
WaterTile Tile::water(2);
sf::Texture Tile::tex;

