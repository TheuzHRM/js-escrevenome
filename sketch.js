function setup() {
    createCanvas(600, 600);
    background("gray");
  }
  
  function draw() {
  
    stroke("black");
    fill("darkblue");
    
    // console.log(mouseIsPressed);
    
    if(mouseIsPressed)
    rect(mouseX, mouseY, 20, 35);
  }