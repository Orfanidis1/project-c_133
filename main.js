function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    stroke(255, 0, 0);
    rect(120, 100, 400, 320);
    stroke(0, 255, 0);
    circle(120, 100, 20);
    circle(520, 100, 20);
    circle(120, 420, 20);
    circle(520, 420, 20);
    tint_color = "";
}

function draw() {
    image(video, 160, 120, 320, 240);
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png')
}