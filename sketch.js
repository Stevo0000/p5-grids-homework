const canvasSize = 500;
const squaresPerSide = 5;
const sq_side = canvasSize / squaresPerSide;

// create variables for images

let leftEar;
let leftEye;
let mouth;
let nose;
let rightEar;
let rightEye;
let skin;
let skin2;

let facialFeatures;

function preload() {
  // load each image

  leftEar = loadImage("images/left_ear.png")
  leftEye = loadImage("images/left_eye.png")
  mouth = loadImage("images/mouth.png")
  nose = loadImage("images/nose.png")
  rightEar = loadImage("images/right_ear.png")
  rightEye = loadImage("images/right_eye.png")
  skin = loadImage("images/skin.png")
  skin2 = loadImage("images/skin2.png")
}

function setup() {
  createCanvas(500, 500);

  noLoop();

  facialFeatures = [leftEar, leftEye, mouth, nose, rightEar, rightEye, skin, skin2]
}

function draw() {
  background(220);

  noStroke()

  // nested loop through columns and rows
  for (let column = 0; column < squaresPerSide; column = column + 1) {
    for(let row = 0; row < squaresPerSide; row = row + 1){
      const randomFacialfeatures = random(facialFeatures);

      // calculate x and y for each column and row position
      let x = column * sq_side;
      let y = row * sq_side;

      // draw square
      square (x, y, sq_side);
      image(randomFacialfeatures, x, y, sq_side, sq_side);
    }
  }
}