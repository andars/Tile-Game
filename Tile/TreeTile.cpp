#include "TreeTile.hpp"

TreeTile::TreeTile(int id):super(id){
	img.setTexture(Tile::tex);
	img.setTextureRect(sf::IntRect(50,0,50,50));
	//std::cout<<"AWESOME!!"<<std::endl;
}


