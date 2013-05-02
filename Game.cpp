#include <iostream>
#include "Game.hpp"



Game::Game(){
	window.create(sf::VideoMode(800,600),"Game");
	window.setFramerateLimit(60);
	isMoving=false;
	
	window.clear(sf::Color(0,0,0,255));
	//tile=level.getTile(5,5);
	sview=window.getView();
	//sview.setCenter(0,0);
	level.loadTileset("tileset.xml");
	level.loadLevelFromFile("level.xml");
	level.update(time);
}


void Game::loop(){
	std::cout<<"WOOOOO"<<std::endl;
	while(window.isOpen()){
		time = timer.restart();
		processInput();
		update(time);
		render();
		//sf::sleep(t=sf::milliseconds(5));
	}
}
void Game::render(){
	window.clear();
	//tile.draw(100,100,&window);
	level.draw(&window);
	//window.setView(sview);
	window.display();
	
	return;
}

void Game::processInput(){
	//std::cout<<"WOOOOO2"<<std::endl;
	sf::Event event;
	while (window.pollEvent(event))
	{
    // check the type of the event...
    switch (event.type)
    {
        // window closed
        case sf::Event::Closed:
            window.close();
            break;

        // key pressed
        case sf::Event::KeyPressed:
        	break;
        default:
        	isMoving=false;
            break;
    }
    }
    if(sf::Keyboard::isKeyPressed(sf::Keyboard::Left)){
        isMoving = true;
         //std::cout<<level.getDirection()<<std::endl;
       
        level.setDirection(3);
    }
    else if(sf::Keyboard::isKeyPressed(sf::Keyboard::Right)){
        isMoving = true;
        //std::cout<<level.getDirection()<<std::endl;
        //level.move(1,0);
       
        level.setDirection(1);
    }else if(sf::Keyboard::isKeyPressed(sf::Keyboard::Up)){
        isMoving = true;
     
        level.setDirection(0);
    }else if(sf::Keyboard::isKeyPressed(sf::Keyboard::Down)){
        isMoving = true;
      
        level.setDirection(2);
    }else{
    	
        level.setDirection(-1);
	}
}
void Game::update(sf::Time t){
	level.update(t);
	
	level.move(t);
	
	
}

void Game::start(){
	loop();
}