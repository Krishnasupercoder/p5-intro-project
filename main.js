function preload(){

}
function setup(){
    canvas = createCanvas(640,420);
    canvas.position(110,280);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,190,100,250,220);
    fill("red");
    stroke("red");
    circle(50,50,80);
    circle(580,50,80);
    circle(580,360,80);
    circle(50,360,80);
    fill("green")
    stroke("black")
    rect(90,40,450,20)
    rect(90,350,450,20)
    rect(40,90,20,230)
    rect(570,90,20,230)
}
function take_snapshot(){
    save("My_filter_picture.png");
}
