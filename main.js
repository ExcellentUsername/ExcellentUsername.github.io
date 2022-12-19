//Initializes the different variables and constants

var G = 6.674 * 10 ** -11;

//Universal gravitational constant

var m = [];

// array for [m1 ,m2 ,m3]

var r = [[], [], []]; 

//2D array for [[r1_x, r1_y], [r2_x, r2_y], [r3_x, r3_y]

var v = [[], [], []]; 

//2D array for [[v1_x, v1_y], [v2_x, v2_y], [v3_x, v3_y]]

var a = [[], [], []];

//2D array for [[a1_x, a1_y], [a2_x, a2_y], [a3_x, a3_y]]

var calculationsCounter = 0; 

//Counts how many times positions have been updated

var iterationsPerFrame = 150; 

//The amount of calculations of movement per frame

var h = 1/150; 

// Time step

let button;

let simulationStarted = false;

//sets up the UI

function setup() { 

  createCanvas(1500, 1000);

  textSize(20);

  text("Initielle startværdier", 30, 25);

  text("X koordinater", 45, 600);

  text("Y koordinater", 235, 600);

  createUserInput(); 

  // Creates the user input boxes

  button = createButton("Start / slut simulation");

  button.position(30, 640)

  button.mousePressed(startSimulation)

  frameRate(60);

}

//Simulation starts

function startSimulation() { 

  if (simulationStarted == false) {

    simulationStarted = true;

    //Assigns position, mass and velocity with its properties given by the user
    
    updateInput(); 

  } else {

    simulationStarted = false;

    //Resets the counter for calculations
    
    calculationsCounter = 0; 

  }

}

//draw function runs once per frame

function draw() { 

  if (simulationStarted == true) {

    //Calculates positions x iterations per frame

    for (let i = 0; i < iterationsPerFrame; i++) { 

      //Calculates updated position

      rungeKutta(); 

      calculationsCounter ++;

    }

    background(255);

    text("Kalkulationer: " + calculationsCounter, 30, 700);

    // Makes the circles black

    fill(0); 

    //Draws the bodies as circles in the middle of the canvas

    circle(r[0][0] + width/2, r[0][1] + height/2, 30); 

    //-__-

    circle(r[1][0] + width/2, r[1][1] + height/2, 30); 

    //-__-
    
    circle(r[2][0] + width/2, r[2][1] + height/2, 30); 

  }

}