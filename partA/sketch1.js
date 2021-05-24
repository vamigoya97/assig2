let seconds = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: -300
}

let minutes = {
  x: -5,
  y: -300,
  w: 10,
  h: 300,
}

let hours = {
  x: -7.5,
  y: -300,
  w: 15,
  h: 300,
}
let s;
let m;
let h;

function setup() {
  // put setup code here
  createCanvas(700, 700);
}

function draw() {
  // put drawing code here
  background(0);
  translate(width/2, height/2);
  stroke('red');

  s = second();
  m = minute();
  h = hour();

  push();
    let q = map(h%12, 0, 12, 0, 2*PI);
    rotate(q);
    strokeWeight(4);
    noFill();
    rect(hours.x, hours.y, hours.w, hours.h);
  pop();

  push();
    let p = map(m, 0, 60, 0, 2*PI);
    rotate(p);
    // fill('rgba(255, 255, 255, 0.75)');
    noFill();
    rect(minutes.x, minutes.y, minutes.w, minutes.h);
  pop();

  push();
    let r = map(s, 0, 60, 0, 2*PI);
    rotate(r);
    line(seconds.x1, seconds.y1, seconds.x2, seconds.y2);
  pop();

  fill('red');
  circle(0, 0, 5);

  textSize(20);
  text(h + ':' + m + ':' + s, -40, -310);
}