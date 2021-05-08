let x = 300; //obstacle x position
let y = 0; //obstacle y position
let diam1 = 80; //obstacle diameter

let xPos2 = 300; //player x position
let yPos2 = 430; //player y position
let diam2 = 50; //player diameter

let state = 'titlePage';
let cnv;

let points = 0;
let speed = 2;

function setup() {
  cnv = createCanvas(600, 600);
  noStroke();
  textAlign(CENTER);
  //frameRate(20);
}

function draw() {
  switch (state) {
    case 'titlePage':
      titlePage();
      cnv.mouseClicked(titlePageMouseClicked);
      break;
    case 'mainPage':
      mainPage();
      break;
    case 'endPage':
      endPage();
      cnv.mouseClicked(endPageMouseClicked);
      break;
  }


}

function titlePage() {
  background(80, 70, 235);
  fill('white');
  textSize(50);
  text('Avoid the obstacles!', width/2, 100);
  textSize(20);
  text('Click anywhere to start.', width/2, 200);
}

function titlePageMouseClicked() {
  state = 'mainPage';
}

function mainPage() {
  background(0);

  //obstacle
  fill('red');
  ellipse(x, y - 25, diam1);

  y += speed;
  if (y >= height + 40) {
    y = 0;
    points++;
  }
  textSize(30);
  text(points,50,50);


//increase speed every 5 points //HOW TO TEST FOR THIS WTF
  // if(points % 5){
  //   speed ++;
  // }

  //player
  fill('white');
  ellipse(xPos2, yPos2, diam2);

  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      xPos2 += 5;
    } else if (keyCode == LEFT_ARROW) {
      xPos2 -= 5;
    }
  }

  var distToMe = dist(xPos2, yPos2, x, y);//distance between player and obstacle
  if (distToMe < diam1/2 + diam2/2) { //sum of radii
    state = 'endPage';
  }
}

function endPage() {
  background(200, 30, 60);
  textSize(50);
  text('GAME OVER',width/2, 100)

  textSize(15);
  text('Click anywhere to restart', width/2, 200);
}

function endPageMouseClicked() {
  state = 'mainPage';
  y = 0;
  xPos2 = 300;
}
