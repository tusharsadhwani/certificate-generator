let canvas;
let myImg;
let myFont;

function downloadCertificate() {
  if (canvas) saveCanvas(canvas, "Certificate Random Person");
}

function preload() {
  myFont = loadFont("sacramento.ttf");
  myImg = loadImage("https://picsum.photos/id/563/200/200.jpg");
}

function setup() {
  let width = 600;
  let height = 400;

  canvas = createCanvas(width, height);
  canvas.parent("cert");

  background("#F47A9E");

  imageMode(CENTER);
  image(myImg, width / 8, height / 2, 120, 120);

  textSize(48);

  textAlign(CENTER, TOP);
  text("Random College", width / 2, 10);

  textAlign(CENTER, CENTER);
  textFont(myFont);
  text("Random person", width / 2, height / 2);

  noLoop();
}
