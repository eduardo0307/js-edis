
function setup() {

    createCanvas(1200 ,600 )
    
    background("white");
    
    }
    
    function draw() {
    
    stroke("blue");
    
    fill("red");
    
    if(mouseIsPressed){
    
    rect(mouseX, mouseY, 20, 35);
    
    }
    
    }
    
    