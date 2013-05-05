var handler = {
	keyStates:[],
	bindings:{
		38: 'up',
		87: 'up',
		37: 'left',
		65: 'left',
		83: 'down',
		39: 'right',
		68: 'right'
	},
	actions:{},
	self: this,
	dirty: 0,
	init: function(){
		
		document.getElementById('canvas').addEventListener('keyup', 
			function(event){
        		handler.actions[handler.bindings[(event.keyCode)]] = false;
			
			}
		);
		document.getElementById('canvas').addEventListener('keydown', 
			function(event){
				console.log(event.keyCode);
				if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
        			event.preventDefault();
    			}
    			
        		handler.actions[handler.bindings[(event.keyCode)]] = true;
        	}
        );
		document.getElementById('canvas').setAttribute('tabindex','0');
		document.getElementById('canvas').focus();
	
	},
	
	onMouseMove: function(event){
		//console.log(event);
	}
};