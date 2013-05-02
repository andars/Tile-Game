#include "Level.hpp"
#include <SFML/Graphics.hpp>

#ifndef GAME_H
#define GAME_H



class Game {
private:
	sf::RenderWindow window;
	//Tile* tile;
	sf::View sview;
	sf::Clock timer;
	sf::Time time,t;
	Level level;
	sf::Texture tex;
  	bool isMoving;
	char direction;
	
	void loop();
	void render();
	void processInput();
	void update(sf::Time t);
	
public:
	Game();
	void start();

};
#endif