var garden;
var cat, cat1, cat2, cat3;
var mouse, mouse1, mouse2, mouse3;

function preload() {
    garden = loadImage("images/garden.png");

    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png", "images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");

    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(700,500);

    cat = createSprite(600, 420);
    cat.addAnimation("catSitting", cat1);
    cat.scale = .13;
    cat.setCollider("rectangle", 0, 0, 1200, 900)

    mouse = createSprite(200, 420);
    mouse.addAnimation("mouse", mouse1);
    mouse.scale = .13;
    mouse.setCollider("rectangle", 0, 0, 650, 900)
}

function draw() {
    background(garden);

    if (isTouching(mouse, cat)) {
        cat.addAnimation("catHappy", cat3);
        cat.changeAnimation("catHappy");
        
        mouse.addAnimation("mouseHappy", mouse3);
        mouse.changeAnimation("mouseHappy");
    }
    drawSprites();
}

function keyPressed(){
    if (keyCode === RIGHT_ARROW) {
      mouse.addAnimation("mouseTeasing", mouse2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 10;
    }

    if (keyCode === LEFT_ARROW) {
        cat.addAnimation("catRunning", cat2);
        cat.changeAnimation("catRunning");
        cat.velocityX = -3;
    }
}