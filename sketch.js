var t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0,0,255,70);
  noFill();
  t = 0;
}

function draw() {
  translate(mouseX, mouseY);
  beginShape();
  for (var i = 30; i < 500; i++) {
    var ang = map(i, 0, 400, 0, TWO_PI);
    var rad = 550 * noise(i * 0.01, t * 0.005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += 1;

  // clear the background every 600 frames using mod (%) operator
  if (frameCount % 2500 == 0) {
	background(255);
  }

}

