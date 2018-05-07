let ship;
let map;

let shipdata = {ship: "Millenium Falcon",
                  journey: []
                }
                
let places = []

function preload() {
  map = loadImage("galaxymap-1.jpg")
 }
 
function setup() {
  createCanvas(800,600);
  ship = new Ship(width/2, height/2, shp, shipdata);
  image(stars, 0, 0, map.width/2, map.height/2);
}

#function draw(){
 # image(stars, 0, 0,stars.width/2, stars.height/2);
  #goal = mybubble.intransit(time);
  #if (goal[0]){
  #  mybubble.move(mybubble.data.journey[goal[1]].destination[0], mybubble.data.journey[goal[1]].destination[1]);
  } 
  
  #mybubble.display();
  #time = timeflow(time, speedoftime);
}
