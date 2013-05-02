#include "Level.hpp"
using namespace rapidxml;

Level::Level():movemodex(0),movemodey(0){
	
	
	maptex.create(800,600);
	tex.loadFromFile("tileset.png");
	if(tex2.loadFromFile("play.png")){
		std::cout<<"woo"<<std::endl;
	}
	
	//texdict["grass"]=sf::IntRect(0,0,50,50);
	//texdict["tree"]=sf::IntRect(50,0,50,50);
	speed =150;
	time=0;
	anim=false;
	player.setX(375);
	player.setY(275);
	player.setSprite(tex2);
	nothing=sf::IntRect(0,0,0,0);
	minx=player.getX()-375, miny=player.getY()-275;
	tile.init();
	mapSprite.setTexture(maptex.getTexture());
	
}
Tile* Level::getTile(int x, int y){
	return Tile::tiles[map[x][y]];
}

void Level::loadLevel(){
	for (int j=0;j<MAP_WIDTH; j++){
		for(int k=0;k<MAP_HEIGHT;k++){
			map[j][k]=0;
			//map[j][k].setID("grass");
			
		}
	}
}
void Level::loadTileset(std::string filename){
	std::ifstream levelfile(filename.c_str());
	if(!levelfile){std::cout<<"booo"<<std::endl;}
	xml_document<> tileset;
	std::vector<char> buffer((std::istreambuf_iterator<char>(levelfile)), std::istreambuf_iterator<char>( ));
	buffer.push_back('\0');
	tileset.parse<0>(&buffer[0]);
	xml_node<>* tile = tileset.first_node()->first_node();
	while(tile){
		
		texdict[tile->first_attribute("id")->value()]=sf::IntRect(atoi(tile->first_attribute("x")->value())*TILE_SIZE,atoi(tile->first_attribute("y")->value())*TILE_SIZE, TILE_SIZE,TILE_SIZE);
		framedict[tile->first_attribute("id")->value()]=atoi(tile->first_attribute("frames")->value());
		tile=tile->next_sibling();
	}
}
void Level::loadLevelFromFile(std::string filename){
	for (int j=0;j<MAP_WIDTH; j++){
	
		for(int k=0;k<MAP_HEIGHT; k++){
				map[j][k]=0;
		}
	}
	
	std::ifstream levelfile(filename.c_str());
	if(!levelfile){std::cout<<"booo"<<std::endl;}
	xml_document<> leveldoc;
	std::vector<char> buffer((std::istreambuf_iterator<char>(levelfile)), std::istreambuf_iterator<char>( ));
	buffer.push_back('\0');
	leveldoc.parse<0>(&buffer[0]);
	
	xml_node<>* node = leveldoc.first_node()->first_node();
	while(node){
		std::cout<<node->name()<<std::endl;
		if(std::strcmp(node->name(),"tilerange")==0){
			//std::cout<<texdict.size()<<std::endl;
			
			
			for(int j = atoi(node->first_attribute("x1")->value());j<=atoi(node->first_attribute("x2")->value());j++){
				for(int k = atoi(node->first_attribute("y1")->value());k<=atoi(node->first_attribute("y2")->value());k++){
					map[j][k]=atoi(node->first_attribute("id")->value());
					
					std::cout<<atoi(node->first_attribute("id")->value())<<std::endl;
			
				}
			}
		}else if(std::strcmp(node->name(),"tile")==0){
			//std::cout<<node->name()<<std::endl;
			
			map[atoi(node->first_attribute("x")->value())][atoi(node->first_attribute("y")->value())]=atoi(node->first_attribute("id")->value());
			std::cout<<atoi(node->first_attribute("id")->value())<<std::endl;
			
		}
		node=node->next_sibling();
	}
	
	
}
void Level::update(sf::Time t){

	time+=t.asSeconds();
	if(time>=0.5){
		tile.nextFrame();
		time=0;
	}else{
		anim=false;
	}
	
	for (int j=0;j<MAP_WIDTH; j++){
	
		for(int k=0;k<MAP_HEIGHT; k++){
				//map[j][k].update(anim);
		}
	}
	
	
	
}	

void Level::draw(sf::RenderWindow* window){
	int total = 0;
	maptex.clear(sf::Color::Black);
	for (int j=(int)minx/50;j<MAP_WIDTH; j++){
		if (j*TILE_SIZE+TILE_SIZE<=minx || j*TILE_SIZE>(minx+800))continue;
		for(int k=(int)miny/50;k<MAP_HEIGHT; k++){
			if(k*TILE_SIZE+TILE_SIZE<miny || k*TILE_SIZE>miny+600)continue;
				
				getTile(j,k)->draw(j*TILE_SIZE-minx,k*TILE_SIZE-miny,*this,maptex);
				//std::cout<<"("<<j<<","<<k<<")"<<" drawn at: ("<<j*TILE_SIZE-minx<<","<<k*TILE_SIZE-miny<<")"<<std::endl;
				total++;
				//std::cout<<(int)map[j][k]<<std::endl;
			
			
		}
	}
	//std::cout<<(int)map[0][0]<<std::endl;

	//til.draw(250,400,&maptex);
	player.draw(minx,miny,&maptex);
	maptex.display();
	window->draw(mapSprite);
}

void Level::move(int x, int y){
	
	minx+=x;
	
	miny+=y;
	player.move(x,y);
}

void Level::move(sf::Time t){
	if((minx<=0&&direction==3)||(minx>=MAP_WIDTH*50&&direction==1)){
		movemodex=1;
	}
	if((miny<=0&&direction==0)||(miny>=MAP_HEIGHT*50&&direction==2)){
		movemodey=1;
	}
	if (movemodex==0){
	switch (direction){
		
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
	if (movemodey==0){
		switch (direction){
			case 0:
				move(0,(-speed)*t.asSeconds());
				break;
			case 2:
				move (0, speed*t.asSeconds());
				break;
			default:
				break;
		}
	}
	}else if (movemodex==1){
		player.move(t, *this);
	}
	if (((player.getX()>=375&&player.getDirection()==1))||(player.getX()<=350&&player.getDirection()==3)){
		movemodex=0;
	}
	if((player.getY()>=275&&player.getDirection()==2)){
		movemodey=0;
	}
	
}

void Level::setDirection(int d){
	player.setDirection(d);
	this->direction=d;
	
}
int Level::getDirection(){
	return this->direction;
}