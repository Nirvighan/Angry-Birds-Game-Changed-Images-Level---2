//namespace all the files 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//create all the avriables
var engine, world;
var box1, pig1, pig3;
var backgroundImg, platform;
var bird, slingshot;

var gameState = "onSling";
var gameState = "launched";
var bg = "background.png";
var score = 0;

function preload() {

    //call the API function
    //getBackgroundImg();

    backgroundImg = loadImage("bgnew.png");

}

function setup() {
    //create the canvas
    var canvas = createCanvas(1400, 400);

    //create an instance for engine and world
    engine = Engine.create();
    world = engine.world;

    //create all the objects
    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700, 340, 70, 70);
    box2 = new Box(920, 340, 70, 70);
    box3 = new Box(1140, 340, 70, 70);
    pig1 = new Pig(810, 350);
    pig2 = new Pig(1020, 350);
    log1 = new Log(870, 280, 590, PI / 2);

    box4 = new Box(700, 260, 70, 70);
    box5 = new Box(920, 260, 70, 70);
    box6 = new Box(1140, 260, 70, 70);
    pig3 = new Pig(810, 220);
    pig4 = new Pig(1020, 220);

    log2 = new Log(870, 210, 590, PI / 2);

    box7 = new Box(810, 190, 70, 70);
    box8 = new Box(1030, 190, 70, 70);

    log3 = new Log(920, 130, 300, PI / 2);
    box9 = new Box(920, 110, 70, 70);

    pig5 = new Pig(910, 190);
    pig6 = new Pig(720, 190);
    pig7 = new Pig(1100, 190);

    bird = new Bird(200, 50);


    slingshot = new SlingShot(bird.body, {
        x: 200,
        y: 50
    });


    box10 = new Box(650, 340, 70, 70);
    box11 = new Box(610, 260, 70, 70);
    box12 = new Box(610, 190, 70, 70);


}

function draw() {

    if (backgroundImg)
        //clear the background
        background(backgroundImg);

    //show the scores
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, 400, 30)

    //update the engine
    Engine.update(engine);
    //strokeWeight(4);

    //display all the objects
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    log1.display();
    box3.display();

    box4.display();
    box5.display();
    box6.display();
    pig3.display();
    pig3.score();
    pig4.display();
    pig4.score();
    log2.display();

    box7.display();
    box8.display();
    log3.display();
    pig5.display();
    pig5.score();
    pig6.display();
    pig6.score();
    pig7.display();
    pig7.score();

    box9.display();

    box10.display();
    box11.display();
    box12.display();

    bird.display();
    platform.display();

    slingshot.display();

    //give the Winning text
    if (score === 1400) {
        fill("white");
        text("YOU WIN", 600, 300);

    }


}

//make a function to drag the player with mouse
function mouseDragged() {
    //if (gameState!=="launched"){
    Matter.Body.setPosition(bird.body, {
        x: mouseX,
        y: mouseY
    });
    //}
}
//}

//create a function to make the bird fly
function mouseReleased() {


    slingshot.fly();
    gameState = "launched";



}
//make the bird attach with the slingshot whe space is pressed
function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(bird.body);
        //make the bird's recent trajectory get invisible when space is pressed
        bird.trajectory = [];
        //make the bird attach with the catapult with less movement
        Matter.Body.setPosition(bird.body, {
            x: 200,
            y: 50
        });

    }
}

//create a function to call the API
//async function getBgImg() {
//var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//var responseJSON = await response.json();

//var datetime = responseJSON.datetime;
//var hour = datetime.slice(11, 13);

//if (hour >= 06 && hour <= 19) {

//  bg = "bgnew.png";

//  } else {

//bg = "sprites/bg2.jpg";

// }

// backgroundImg = loadImage(bg);
//console.log(backgroundImg);
//}