let x, y;
let num = 1;
let size = 200;
let CanvSize = 4000;
let turn = 0;
let step = 1;
let eSize = CanvSize / size;
let stepScale = 2;

function ask() {
    size = prompt("Please enter the limit of the spiral:","");
    CanvSize = prompt("Please enter the size of the canvas:", "");
//     if (size == null || size == "") {
//         size = 100;
//     }
//     if (CanvSize == null || CanvSize == "") {
//         CanvSize = size*30;
//     }
}

ask();

function setup() {
    createCanvas(CanvSize * 3, CanvSize * 3);
    x = width / 2;
    y = height / 2;
    background(0);
    fill(255);
    stroke(255);
    strokeWeight(4);
}

function isPrime(n) {
    // Check if n=1 or n=0
    if (n <= 1)
        return false;
    // Check if n=2 or n=3
    if (n == 2 || n == 3)
        return true;
    // Check whether n is divisible by 2 or 3
    if (n % 2 == 0 || n % 3 == 0)
        return false;
    // Check from 5 to square root of n
    // Iterate i by (i+6)
    for (var i = 5; i <= Math.sqrt(n); i = i + 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    return true;
}

function draw() {
    textSize(CanvSize / size)
    textAlign(CENTER, CENTER);
    if (num == 1) {
        text(num, x, y);
        // ellipse(x, y, eSize);
        num++;
    }
    if (turn != 3) {
        turn++;
    } else {
        turn = 0;
    }
    if (num < Math.pow(size, 2)) {
        for (let i = 0; i < step - 1; i++) {
            if (turn == 0) {
                x = (x + CanvSize / (size / stepScale));
            }
            else if (turn == 1) {
                y = (y - CanvSize / (size / stepScale));
            }
            else if (turn == 2) {
                x = (x - CanvSize / (size / stepScale));
            }
            else if (turn == 3) {
                y = (y + CanvSize / (size / stepScale));
            }
            if (isPrime(num)) {
                // text(num, x, y);
                ellipse(x, y, eSize * 1.7);
                if (turn == 0) {
                    line((x - CanvSize / (size / stepScale)), y, x, y);
                }
                else if (turn == 1) {
                    line(x, (y + CanvSize / (size / stepScale)), x, y);
                }
                else if (turn == 2) {
                    line((x + CanvSize / (size / stepScale)), y, x, y);
                }
                else if (turn == 3) {
                    line(x, (y - CanvSize / (size / stepScale)), x, y);
                }
            } else {
                ellipse(x, y, eSize / 3);
                if (turn == 0) {
                    line((x - CanvSize / (size / stepScale)), y, x, y);
                }
                else if (turn == 1) {
                    line(x, (y + CanvSize / (size / stepScale)), x, y);
                }
                else if (turn == 2) {
                    line((x + CanvSize / (size / stepScale)), y, x, y);
                }
                else if (turn == 3) {
                    line(x, (y - CanvSize / (size / stepScale)), x, y);
                }
            }
            num++;
        }
        step += 0.5;
    }

}
