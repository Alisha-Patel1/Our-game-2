var Bg1,Bg2,gameOver,form,system,code,security;
var score=0;

function preload() {
  Bg1 = loadImage("Bg1.jpeg");
  Bg2 = loadImage("Bg2.jpeg");
  gameOver = loadImage("Mario-GameOver.webp");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(Bg1);
  clues();
  security.display();
  textSize(30)
  text("Level 1", 50, 25)
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 2) {
  
    background(Bg2)
    textSize(30)
    text("Level 2", 50, 25)
    textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);


    fill("Black")
    textSize(15)
    text("", 100,70)

    fill("Black")
    textSize(15)
    text("", 250,170)
    
    security.display();
  

  }



  drawSprites()
}