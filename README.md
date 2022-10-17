# 20221017
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
for(var j=0;j<windowHeight/50;j++){
  for(var i=0;i <windowWidth/50;i++){
  stroke("#a4c3b2")
  ellipse(25+(i*50),25+(j*50),mouseX/10);
  stroke("#6b9080")
  rect(0+(i*50),0+(j*50),50,mouseY/4);
  stroke("#f6fff8")
  ellipse(50+(i*50),50+(j*50),25)
  }
}
}
