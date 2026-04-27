// source: GUI: image as button by emmajaneculhane
var button;

function setup() {
  createCanvas();
  background(0);
  button = createImg("/images/bison-line.png", "Design");
  button.position(250, 420);
  button.mousePressed(goToDesign);

  button2 = createImg("/images/tshirt.png", "Merch");
  button2.position(750, 420);
  button2.mousePressed(goToMerch);

  button3 = createImg("/images/parachute.png", "Costume");
  button3.position(1300, 400);
  button3.mousePressed(goToCostume);
}

function goToDesign() {
  window.location.href = "design.html";
}

function goToMerch() {
  window.location.href = "merch.html";
}

function goToCostume() {
  window.location.href = "misc.html";
}
