// if/else source: If_Else_MouseIsPressed Code Snippet by Carrie Hott

function setup() {
  createCanvas(1900, 700);
  background("#1c1c1c");
  misc = loadImage("images/misc-290.png");
  misc2 = loadImage("images/misc-670.png");
  misc3 = loadImage("images/misc-1300.png");
  misc4 = loadImage("images/misc-89000.png");
  misc5 = loadImage("images/misc-111109.png");
  total = loadImage("images/misc-total.png");
  blank = loadImage("images/parachute.png");

  // button source: GUI: image as button by emmajaneculhane
  button = createImg("images/next.png", "Next");
  button.position(1600, 600);
  button.mousePressed(goToNext);
}

function draw() {
  // Display the image
  if (mouseIsPressed) {
    image(misc, 127, 0);
    image(misc2, 100, 300);
    image(misc3, 470, 170);
    image(misc4, 1200, 300);
    image(misc5, 1390, 10);
    image(total, 790, 0);
  } else {
    image(blank, 800, 280);
  }
}

function goToNext() {
  window.location.href = "total.html";
}
