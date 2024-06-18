function setup() {
  createCanvas(800, 800);
  background("white")

  
}

function draw() {


  stroke("yellow");
  fill("green");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 30, 45);
  }
}
