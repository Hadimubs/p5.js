function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
v=createCapture(VIDEO);
v.hide();
}
function draw(){
image(v,230,150,200,200);
fill("red");
stroke("black");
circle(80,90,80);
circle(550,90,80);
circle(550,400,80);
circle(80,400,80);

fill("black")
stroke("yellow");
rect(120,80,390,30);
rect(120,390,390,30);
rect(65,130,30,230);
rect(530,130,30,230);
}
function take_snapshot(){
save("r.png");
}