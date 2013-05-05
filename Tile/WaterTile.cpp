#include "WaterTile.hpp"

WaterTile::WaterTile(int id):super(id){
	img.setTexture(Tile::tex);
	img.setTextureRect(sf::IntRect(0,100,50,50));
	//std::cout<<"AWESOME!!"<<std::endl;
}


