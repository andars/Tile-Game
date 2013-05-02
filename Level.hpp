#include "Tile/Tile.hpp"
#include "Tile/GrassTile.hpp"
#include "Tile/TreeTile.hpp"
#include "Entity.hpp"
#include "Player.hpp"
#include "Entity.hpp"
#include "rapidxml.hpp"
#include <iostream>
#include <vector>
#include <map>
#include <fstream>
#include <cstring>
#ifndef LEVEL_H
#define LEVEL_H



#define MAP_WIDTH 40 
#define MAP_HEIGHT 40 


class Level{
	char map[MAP_WIDTH][MAP_HEIGHT];
	int minx, miny;
	int direction;
	float time;
	bool anim;
	Tile tile;
	short movemodex;
	short movemodey;
	short speed;
	std::map<std::string,sf::IntRect> texdict;
	std::map<std::string,int> framedict;
	sf::IntRect nothing;
	sf::Texture tex;
	sf::Texture tex2;
	
	Player player;
	sf::Sprite mapSprite;
	sf::RenderTexture maptex;
	sf::Texture maptexdraw;
public:
	Level();
	
	Tile* getTile(int x, int y);
	void loadLevel();
	void setDirection(int d);
	int getDirection();
	void loadTileset(std::string filename);
	void loadLevelFromFile(std::string filename);
	void update(sf::Time t);
	void draw(sf::RenderWindow* window);
	void move(int x,int y);
	void move(sf::Time t);
};
#endif