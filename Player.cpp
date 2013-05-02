#include "Player.hpp"
#include "Level.hpp"

Player::Player():speed(150){}

void Player::move(int dx, int dy){
	this->x+=dx;
	this->y+=dy;
	int xt=(x-x%50)/50;
	int yt=(y-y%50)/50;
	
	img.setPosition(x,y);
}

void Player::move(sf::Time t, Level& lev){
	
	switch (direction){
		case 0:
			move(0,(-speed)*t.asSeconds());
			break;
		case 1:
			move((speed)*t.asSeconds(),0);
			break;
		case 2:
			move(0,speed*t.asSeconds());
			break;
		case 3:
			//std::cout<<"gg!!!!!!!!!!"<<t.asSeconds()<<std::endl;
			move((-speed)*t.asSeconds(),0);
			break;
		default:
			break;
}
}	

void Player::draw(int mx, int my, sf::RenderTexture* targ){
	img.setPosition(this->x-mx,this->y-my);
	targ->draw(img);
}
void Player::draw( sf::RenderTexture* targ){
	
	targ->draw(img);
}

void Player::setDirection(int d){
	direction = (short) d;
}
void Player::setX(int nx){
	this->x=nx;
}
void Player::setY(int ny){
	this->y=ny;
}

bool Player::collides(Entity e){
return false;
}
bool Player::collides(Tile t){
return false;
}
bool Player::canMove(){
return true;
}
int Player::getX(){
	return x;
}
int Player::getY(){
	return y;
}
int Player::getDirection(){
	return this->direction;
}
