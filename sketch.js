function setup() {
  createCanvas(400, 600); // Ajustei a altura do canvas para melhor visualização
}

function draw() {
  background(220);

  // Camiseta rosa
  fill(255, 192, 203); // Rosa claro
  rect(140, 200, 120, 60, 10); // Posição e tamanho da camiseta

  // Saia preta
  fill(0); // Preto
  rect(140, 260, 120, 100); // Posição e tamanho da saia

  // Sapatos rosa
  fill(255, 192, 203); // Rosa claro
  ellipse(200, 430, 60, 20); // Pé esquerdo
  ellipse(260, 430, 60, 20); // Pé direito

  // Cabelos médios castanhos enrolados com raiz lisa
  fill(139, 69, 19); // Castanho escuro
  // Cachos médios (enrolados nas pontas)
  ellipse(200, 100, 40, 40);
  ellipse(235, 95, 30, 30);
  ellipse(270, 90, 35, 35);

  // Sobrancelha preta arqueada
  strokeWeight(3);
  stroke(0);
  noFill();
  beginShape();
  vertex(185, 120);
  vertex(200, 115);
  vertex(220, 118);
  endShape();

  // Olhos médios pretos com cílios grandes
  fill(255); // Branco dos olhos
  ellipse(185, 135, 30, 20); // Olho esquerdo
  ellipse(245, 135, 30, 20); // Olho direito
  fill(0); // Pupila preta
  ellipse(185, 135, 15, 15); // Pupila esquerda
  ellipse(245, 135, 15, 15); // Pupila direita

  // Nariz formato batata e empinado
  noFill();
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(215, 145);
  vertex(205, 160);
  vertex(215, 160);
  vertex(225, 160);
  endShape();

  // Boca grande e vermelha
  noFill();
  stroke(255, 0, 0); // Vermelho
  strokeWeight(4);
  arc(215, 175, 60, 40, 0, PI); // Boca

  // Bochechas rosadas
  fill(255, 150, 150); // Rosa claro
  ellipse(175, 155, 20, 20); // Bochecha esquerda
  ellipse(255, 155, 20, 20); // Bochecha direita

  // Pinta entre o nariz e a boca do lado esquerdo
  fill(0); // Preto
  noStroke();
  ellipse(210, 170, 5, 5); // Pinta

  noLoop(); // Parar de desenhar após uma vez
}



  