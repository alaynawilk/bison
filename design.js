// if/else source: If_Else_MouseIsPressed Code Snippet by Carrie Hott

function setup() {
  createCanvas(1900, 700);
  background("#1c1c1c");
  design = loadImage("/images/design-2700.png");
  design2 = loadImage("/images/design-3800.png");
  design3 = loadImage("/images/design-total.png");
  design4 = loadImage("/images/design-9000.png");
  design5 = loadImage("/images/design-14200.png");
  blank = loadImage("/images/bison-line.png");

  // button source: GUI: image as button by emmajaneculhane
  button = createImg("/images/next.png", "Next");
  button.position(1500, 600);
  button.mousePressed(goToNext);
}

function draw() {
  // Display the image
  if (mouseIsPressed) {
    image(design, 200, 10);
    image(design2, 500, 300);
    image(design3, 800, 10);
    image(design4, 1100, 300);
    image(design5, 1400, 10);
  } else {
    image(blank, 800, 330);
  }
}

function goToNext() {
  window.location.href = "/intro/page3.html";
}
