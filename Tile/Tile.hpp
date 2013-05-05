#ifndef TILE_H
#define TILE_H
#include <SFML/Graphics.hpp>
#include <iostream>
#include <string>


#define TILE_SIZE 50

class Level;
class GrassTile;
class TreeTile;
class WaterTile;

class Tile{
	public:
	
	static Tile* tiles[64];
	static GrassTile grass;
	static TreeTile tree;
	static WaterTile water;
	
	static sf::Texture tex;
	Tile();
	~Tile();
	Tile(int id);
	
	void init();
	virtual void draw(int x, int y, Level& level, sf::RenderTarget& window);
	void draw(int x, int y, bool anim, sf::RenderTexture* tex);
	void setSprite(sf::Texture& tex);
	virtual unsigned char out();
	virtual void update(bool anim);
	bool isWalkable();
	void nextFrame();
	
	protected:
	
	sf::Sprite img;
	int frame;
	unsigned char id;
	
	
	
};
#endif