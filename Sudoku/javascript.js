
function init(){
var view = {
	displayMessage: function(msg){
		var messageArea = document.querySelector('#messageArea');
		messageArea.innerHTML = msg;
	},

	displayHit: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};

// view.displayMessage("messagehere");
// view.displayHit("24");
// view.displayMiss("32");




var model ={
            numShips: 3,
            shipLlength: 3,
            boardSize: 7,
            shipSink:0,
            ships = [
                ship1 ={location:[10,20,30], hits:['','',] },
                ship2 ={location:[52,53,54], hits:['','',] },
                ship3 ={location:[61,62,63], hits:['','',] }
        
             ],
             fire: function(guess){
                 for(var i=0; i< this.numShips; i++){
                var ship = this.ships[i];
                location = ship.location;
                var index = location.indexOf(guess);
                if(index>=0){
                    ship.hits[index]='hit';
                    return true;
                }
                  
                 }return false;

             }


};


















};
window.onload=init;