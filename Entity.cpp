#include "Entity.hpp"
/*
void Entity::move(){
	return;
}
	
bool Entity::collides(Entity e){
	return false;
}
bool Entity::collides(Tile t){
	return false;
}
*/
void Entity::draw(int x, int y, sf::RenderTarget* target){
	target->draw(img);
}
void Entity::setSprite(sf::Texture& tex){
	this->img.setTexture(tex);
	std::cout<<"awesome!"<<std::endl;
}