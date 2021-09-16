function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide()
}
function draw(){
    image(video, 40, 40, 500, 400);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(90, 40, 440, 20);
    rect(90, 420, 440, 20);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(40, 40, 20, 400);
    rect(540, 40, 20, 400);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 430, 80);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(550, 430, 80);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(550, 50, 80);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
}

function take_snapshot(){
    save("My Selfie.png");
}
