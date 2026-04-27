function setup() {
  createCanvas();
}

button = createImg("images/about.png", "About");
button.position(1600, 700);
button.mousePressed(goToNext);

function goToNext() {
  window.location.href = "about.html";
}
