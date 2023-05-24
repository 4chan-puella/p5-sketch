// basado en el manga  Junji-to "Uzumaki"
// problema no resuelto: No logro reiniciar el tamaño del ojo izquierdo

let eyeSize = 50;

//happens only once
function setup() {
  createCanvas(400, 400);
  background(1000);
}

//happens forever or in a loop
function draw() {
  stroke(127, 63, 120);
  background(mouseX, mouseY); // degradacion en escala de grises segun hover en ejes x, y

  //lienzo
  fill(200);
  rect(50, 20, 300, 360, 10);

  //hair
  beginShape();
  fill(10);
  stroke(200, 500, 60);
  strokeWeight(2);
  vertex(70, 200);
  vertex(80, 300);
  vertex(130, 330);
  vertex(345, 300);
  vertex(345, 50);
  vertex(300, 20);
  vertex(150, 20);
  vertex(150, 20);
  vertex(140, 20);
  vertex(110, 50);
  vertex(90, 80);
  // vertex(300, 200);
  //vertex(200, 250);
  endShape(CLOSE);

  //face
  beginShape();
  fill(255, 255, 255);
  noStroke();
  vertex(110, 160);
  vertex(130, 300);
  vertex(150, 330);
  vertex(160, 340);
  vertex(170, 350);
  vertex(200, 350);
  vertex(215, 345);
  vertex(240, 335);
  vertex(290, 310);
  vertex(300, 300);
  vertex(310, 280);
  vertex(315, 250);
  vertex(315, 200);
  vertex(310, 160);
  endShape(CLOSE);

  beginShape();
  vertex(110, 160);
  vertex(130, 300);
  vertex(150, 330);
  vertex(160, 340);
  vertex(170, 350);
  endShape();

  //spiral
  //dark_ellipse
  beginShape();
  fill(mouseX, mouseY);
  noStroke();
  ellipse(240, 115, 165, 175);
  endShape();

  //bright_ellipse
  fill(300);
  noStroke();
  ellipse(242, 117, 155, 165);

  //dark_ellipse
  beginShape();
  fill(100);
  noStroke();
  ellipse(244, 119, 145, 155);
  endShape();

  //bright_ellipse
  fill(300);
  noStroke();
  ellipse(246, 121, 135, 145);
  //dark_ellipse
  fill(100);
  noStroke();
  ellipse(248, 123, 125, 135);
  //bright_ellipse
  fill(300);
  noStroke();
  ellipse(250, 125, 115, 125);
  //dark_ellipse
  fill(100);
  noStroke();
  ellipse(252, 127, 105, 115);
  //white_ellipse
  fill(300);
  noStroke();
  ellipse(254, 129, 95, 105);
  //dark_ellipse
  fill(100);
  noStroke();
  ellipse(256, 131, 85, 95);
  //bright_ellipse
  fill(300);
  noStroke();
  ellipse(258, 133, 75, 85);
  //dark_ellipse
  fill(100);
  noStroke();
  ellipse(260, 135, 65, 75);
  //white_ellipse
  fill(300);
  noStroke();
  ellipse(262, 137, 55, 65);
  //dark_ellipse
  fill(100);
  noStroke();
  ellipse(264, 139, 45, 55);
  //white_ellipse
  fill(300);
  noStroke();
  ellipse(266, 141, 35, 45);
  //dark_ellipse
  fill(100);
  noStroke();
  ellipse(268, 143, 25, 35);
  //white_ellipse
  fill(300);
  noStroke();
  ellipse(270, 145, 15, 25);
  //dark_ellipse
  fill(100);
  noStroke();
  ellipse(271, 146, 8, 15);
  //white_ellipse
  fill(300);
  noStroke();
  ellipse(272, 147, 4, 7);

  // Draw eyes

  //whites of right-eye
  
  strokeWeight(1)
  stroke(20)
  fill(255);
  ellipse(240, 180, 50, 50);

  //iris
  let xc = constrain(mouseX, 230, 250);
  let xs = constrain(mouseY, 170, 190);
  fill(0);
  circle(xc, xs, 25);

  //glare
  fill(255);
  circle(xc + 5, xs - 5, 5);

  
  
  fill(10);
  ellipse(140, 190, eyeSize * 0.8, eyeSize * 0.5);

  fill(255);
  ellipse(140, 190, eyeSize * 0.78, eyeSize * 0.48);

  
  //whites of left-eye


  //iris
  let yc = constrain(mouseX, 130, 140);
  let ys = constrain(mouseY, 190, 10);
  fill(0);
  circle(yc, ys,24,66)

  //glare
  fill(255);
  circle(yc + 5, ys - 5, 5);




}

function mouseClicked() {
  // aumenta el tamaño de los ojos cuando los clickeas, (no se como reiniciarlo).
  eyeSize += 5;
}
