let cor;
let circuloX;
let circuloY;

function setup() {
   createCanvas(400, 400);
  background ("brown");
  cor = ["darkred", "salmon", "blue"]
  circuloX = [100, 200, 300];
  circuloY =[100, 200, 300]
}

function draw() {
  for (let contador in circuloX) {
     fill(cor[contador]);
    circle(circuloX[contador],
circuloY[contador], 50);
 }
}