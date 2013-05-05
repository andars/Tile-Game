#ifndef GRASS_H
#define GRASS_H
#include "Tile.hpp"

class GrassTile: public Tile{

	private:
	
	typedef Tile super;
	public:
	GrassTile(int id);
	
	unsigned char out();
	
	void draw(int x, int y, sf::RenderTarget& window);
	
};

#endif