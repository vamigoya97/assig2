function setup() {
    // put setup code here
    createCanvas(700, 700);
    background(0); 
    stroke('red');
    //strokeWeight(2);
}

function draw() {
    // put drawing code here
}


let count = 0;

function mousePressed() {
    count += 1;
    let tally = 0;

    for (let y = 50; y <= height - 50; y += 50){
        for (let x = 50; x <= width - 55; x += 10) {


            if (tally < count) {
                tally += 1;

                if (tally % 5 == 0) {
                    line(x - 50, y + 20, x, y);
                }
                else {
                    line(x, y, x, y + 20);
                }
            }

            
        }
    }
}

function keyPressed() {
    clear();
    count = 0;
    background(0);
}