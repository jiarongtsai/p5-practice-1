function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(50);
  stroke(255);
  rectMode(CENTER);
  noFill();
  drawF(320, 320, 50, 6, 5);

}

function drawF(x, y, r, seg, level) {
  if(level > 0){
    // ellipse(x, y, r);

    rect(x, y, r, r);
    level--;
    for(var i=0; i<seg; i++){
      var xc = x+ cos(i*TWO_PI/seg+mouseX/50) *r;
      var yc = y+ sin(i*TWO_PI/seg+mouseY/50) *r;
      drawF(xc, yc, r, seg, level);
    }
  }
}
