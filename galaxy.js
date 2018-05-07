let mybubble;
let shp;
let stars;
let time;
let speedoftime;
let goal;

let shipdata = {ship: "Millenium Falcon",
                  journey: []
                }
                
let places = []

function preload() {
  map = loadImage("...")
 }
 
function setup() {
  createCanvas(800,600);
  mybubble = new Bubble(width/2, height/2, shp, shipdata);
  image(stars, 0, 0,stars.width/2, stars.height/2);
  time = 0;
  speedoftime = 2;
  goal = 0;
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
