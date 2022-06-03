var xspeed;
var yspeed;
var x;
var y;
var heightToBorder;
var widthToBorder;
var xspeed1;
var yspeed1;
var x1;
var y1;

function setup(){ 
  background(0);
  createCanvas(400,400);
  xspeed=0;
  while (xspeed<=2 && xspeed>=-2){
    xspeed=int(random(-5,6));
  }
  yspeed=0;
  while (yspeed<=2 && yspeed>=-2){
    yspeed=int(random(-5,6));
  }
  x=int(random(5,395-widthToBorder));
  y=int(random(5,395-heightToBorder));
  heightToBorder=25;
  widthToBorder=50;
  
  xspeed1=0;
  while (xspeed1<=2 && xspeed1>=-2){
    xspeed1=int(random(-5,6));
  }
  yspeed1=0;
  while (yspeed1<=2 && yspeed1>=-2){
    yspeed1=int(random(-5,6));
  }
  x1=int(random(5,395-widthToBorder));
  y1=int(random(5,395-heightToBorder));
}

function draw(){
  background(0);
  x+=xspeed;
  y+=yspeed;
  if ((x+2*widthToBorder)>=width){
    xspeed=int(random(-5,-2));
  }else if (x<0){
    xspeed=int(random(3,6));
  }
  if ((y+2*heightToBorder)>=height){
    yspeed=int(random(-5,-2));
  }else if (y<0){
    yspeed=int(random(3,6));
  }
  rect(x,y,2*widthToBorder,2*heightToBorder);
  
  x1+=xspeed1;
  y1+=yspeed1;
  if ((x1+2*widthToBorder)>=width){
    xspeed1=int(random(-5,-2));
  }else if (x1<0){
    xspeed1=int(random(3,6));
  }
  if ((y1+2*heightToBorder)>=height){
    yspeed1=int(random(-5,-2));
  }else if (y1<0){
    yspeed1=int(random(3,6));
  }
  rect(x1,y1,2*widthToBorder,2*heightToBorder);
}
