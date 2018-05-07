let mybubble;
let shp;
let stars;

let places = {"Naboo":(746, 641), "Tatooine":(944, 605), "Coruscant": (538, 351), "Kamino": (1026, 556), "Geonosis":(937, 643), "Utapau":(685,779), "Kashyyyk":(830, 344), "Mustafar":(558,752), "Polis Massa":(531,785), "Alderaan":(683, 359), "Yavin VI":(817, 197), "Hoth":(492, 703), "Dagobah":(682, 732), "Bespin":(482, 686), "Endor": (347, 631), "Sullust":(670, 651)}

function preload(){
  stars = loadImage("galaxymap-1.jpg")
}

function setup(){
  createCanvas(8000,6000);
  mybubble = new Bubble(width/2, height/2, shp);
  image(stars, 0, 0,stars.width/2, stars.height/2);
}

function draw(){
  image(stars, 0, 0,stars.width/2, stars.height/2);
  mybubble.move(mouseX, mouseY);
  mybubble.display();
}

function mousePressed(){
  console.log(mouseX, mouseY);
}

class Bubble {
  constructor(x, y, icon) {
    this.pos = createVector(x, y);
    this.c = color(255);
    this.icon = icon
  }
  
  move(x, y) {
      let destination = createVector(x, y);
      let dir = p5.Vector.sub(destination, this.pos);
      // move five percent of the way each time
      let step = dir.mult(0.05);
      this.pos = this.pos.add(step);
  };

  display () {
      fill(this.c);
      imageMode(CENTER);
      image(this.icon, this.pos.x, this.pos.y, shp.width / 4, shp.height / 4);
  };
}
