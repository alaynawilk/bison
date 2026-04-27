// if/else source: If_Else_MouseIsPressed Code Snippet by Carrie Hott

function setup() {
  createCanvas(1900, 700);
  background("#1c1c1c");
  merch = loadImage("images/merch-333.png");
  merch2 = loadImage("images/merch-411.png");
  merch3 = loadImage("images/merch-459.png");
  merch4 = loadImage("images/merch-500.png");
  merch5 = loadImage("images/merch-1255.png");
  merch6 = loadImage("images/merch-1293.png");
  total = loadImage("images/merch-total.png");
  merch7 = loadImage("images/merch-1538.png");
  merch8 = loadImage("images/merch-1545.png");
  merch9 = loadImage("images/merch-1635.png");
  merch10 = loadImage("images/merch-1768.png");
  merch11 = loadImage("images/merch-4355.png");
  merch12 = loadImage("images/merch-5180.png");
  merch13 = loadImage("images/merch-6983.png");
  blank = loadImage("images/tshirt.png");

  // button source: GUI: image as button by emmajaneculhane
  button = createImg("images/next.png", "Next");
  button.position(1600, 700);
  button.mousePressed(goToNext);
}

function draw() {
  // Display the image
  if (mouseIsPressed) {
    image(merch, 127, 0);
    image(merch2, 100, 400);
    image(merch3, 300, 170);
    image(merch4, 430, 400);
    image(merch5, 450, 10);
    image(merch6, 580, 200);
    image(total, 790, 0);
    image(merch7, 1020, 230);
    image(merch8, 1500, 0);
    image(merch9, 1090, 0);
    image(merch10, 0, 170);
    image(merch11, 1300, 400);
    image(merch12, 1550, 220);
    image(merch13, 1300, 150);
  } else {
    image(blank, 800, 380);
  }
}

function goToNext() {
  window.location.href = "page3.html";
}
