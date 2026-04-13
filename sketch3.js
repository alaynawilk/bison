// responsive fullscreen source: https://editor.p5js.org/lf/sketches/Sy5vDEXnW
// variables for auto width/height
var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  canvas = createCanvas(w, h);
}

function draw() {
  background("#0D0D0D");
  // A rectangle
  fill("#cc0000");
  noStroke();
  rect(20, 20);
  // uses global variables for width and height
}

window.onresize = function () {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.size(w, h);
};
