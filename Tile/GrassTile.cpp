#include "GrassTile.hpp"

GrassTile::GrassTile(int id):super(id){
	img.setTexture(Tile::tex);
	img.setTextureRect(sf::IntRect(0,0,50,50));
	//std::cout<<"AWESOME!!"<<std::endl;
}

unsigned char GrassTile::out(){
	return id;
}

void GrassTile::draw(int x, int y, sf::RenderTarget& window){
	img.setPosition(x,y);
	window.draw(img);
}