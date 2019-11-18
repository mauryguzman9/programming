var r = 0;
var g = 0;
var b = 0;

function setup() {
    // put setup code here
    createCanvas(500, 500);
    background(200);
    //head
    fill("#F7C863");
    noStroke();
    ellipse(250, 250, 200, 300);
    
        //ears
    fill("#F7C863");
    noStroke();
    ellipse(360, 235, 50, 85);
    fill("#F7C863");
    noStroke();
    ellipse(140, 235, 50, 85);
}

function draw() {
    // put drawing code here
    //  background(200);

    //neck
    fill("#F7C863");
    noStroke();
    rect(190, 370, 120, 140);
    //eyes
    fill("#FFFFFF");
    noStroke();
    ellipse(220, 220, 55, 35);
    fill("#FFFFFF");
    noStroke();
    ellipse(280, 220, 55, 35);
    fill(r, g, b);
    noStroke();
    ellipse(280, 220, 40, 30);
    fill(r, g, b);
    noStroke();
    ellipse(220, 220, 40, 30);
    //nose
    fill("#FFCD3C");
    noStroke();
    triangle(250, 250, 280, 280, 220, 280);





}

function mousePressed() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
}

function keyTyped() {


    if (key === "h") {
        // hair
        fill("#000000");
        noStroke();
        rect(155, 65, 190, 120);
        
    } else if (key === "e") {
        //earrings
        fill("#F9F9F9");
        stroke("#F0F0F0");
        strokeWeight(2);
        ellipse(145, 275, 10, 10);
        fill("#F9F9F9");
        stroke("#F0F0F0");
        strokeWeight(2);
        ellipse(355, 275, 10, 10);
        
    } else if (key === "m") {
        //mouth
        fill("#AE0E18");
        noStroke();
        rect(210, 300, 80, 40);
    }

}
