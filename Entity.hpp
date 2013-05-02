#ifndef ENTITY_H
#define ENTITY_H
#include "Tile/Tile.hpp"

class Entity{
	protected:
	sf::Sprite img;
	
	public:
	
	virtual void move(){}
	virtual bool collides(Entity e){return false;}
	virtual bool collides(Tile t){return false;}
	virtual void draw(int x, int y, sf::RenderTarget* target);
	void setSprite(sf::Texture& tex);
};
#endif