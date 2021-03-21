function setup(){
    createCanvas(windowWidth, windowHeight)
}

function draw(){
    strokeWeight(50) //*---刮開筆尖大小
    if(mouseIsPressed === true){
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
}