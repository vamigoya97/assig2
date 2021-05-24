let s;
let m;
let h;

function setup() {
    // put setup code here
    createCanvas(700, 700);
}
  
function draw() {
    // put drawing code here

    s = second();
    m = minute();
    h = hour();

    background(0);
    stroke('red');
    translate(width/2, height/2);
    line(-width, 0, width, 0);
    noFill();

    let q = map(s, 0, 60, 100, 200);
    circle(0, 0, q);

    let r = height*0.4;
    let p = map(m, 0, 60, -PI, 0);
    let x_min = r*cos(p);
    let y_min = r*sin(p);

    let t = map(h, 0, 24, 0, PI);
    let x_hour = r*cos(t);
    let y_hour = r*sin(t);

    let diff_hour = PI/24;
    for(let i = diff_hour; i <= PI - diff_hour; i += diff_hour) {
        stroke(105, 105, 105);
        line(0, 0, r*cos(i), r*sin(i));
        push();
            stroke('red');
            line(0, 0, x_hour, y_hour);
            fill('red');
            circle(x_hour, y_hour, 15);
        pop();
    }


    let diff_min = (PI)/60;
    for (let i = -PI + diff_min; i < 0 - diff_min; i += diff_min){
        stroke(105, 105, 105);
        line(0, 0, r*cos(i), r*sin(i));
        push();
            stroke('red');
            line(0, 0, x_min, y_min);
            fill('red');
            circle(x_min, y_min, 15);
        pop();
    }
    
    
}