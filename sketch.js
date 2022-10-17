function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  
  //ellipse(25,25,50);
  //rect(0,0,50,50);
  //ellipse(50,50,25)
  //ellipse(75,25,50)
  //rect(50,0,50)
  //ellipse(100,50,25)
  //ellipse(125,25,50)
  //rect(100,0,50)
  //ellipse(150,50,25)
  //ellipse(175,25,50)
  //rect(150,0,50)
  //ellipse(200,50,25)
  //ellipse(225,25,50)
  //rect(200,0,50)
  //ellipse(250,50,25)
  //ellipse(275,25,50)
  //rect(250,0,50)
  //ellipse(300,50,25)
  //ellipse(325,25,50)
  //rect(300,0,50)
  //ellipse(350,50,25)
  //ellipse(375,25,50)
  //rect(350,0,50)
  //ellipse(400,50,25)
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
