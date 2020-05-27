let canvas;
let myImg;
let myFont;

let download = false;
function downloadCertificate() {
  download = true;
}

function preload() {
  myFont = loadFont("sacramento.ttf");
  myImg = loadImage("https://i.picsum.photos/id/563/200/200.jpg");
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

  checkSave(saveCanvas);
  noLoop();
}

function checkSave(saveCanvas) {
  if (download) {
    saveCanvas(canvas, "Certificate Random Person");
  } else {
    setTimeout(() => checkSave(saveCanvas), 1000);
  }
}
