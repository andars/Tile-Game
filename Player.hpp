#include "Entity.hpp"
#ifndef PLAYER_H
#define PLAYER_H

class Level;

class Player: public Entity{
	private:
	
	int x, y;
	short direction;
	short speed;
	public:
	
	Player();
	void move(int dx, int dy);
	void move(sf::Time t, Level& lev);
	void setDirection(int d);
	void draw( sf::RenderTexture* targ);
	void draw(int mx, int my, sf::RenderTexture* targ);
	void setX(int nx);
	void setY(int ny);
	int getX();
	int getY();
	int getDirection();
	bool collides(Entity e);
	bool collides(Tile t);
	bool canMove();


};

#endif