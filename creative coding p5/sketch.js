
let a = 0.0;
let s = 0.3;
function setup(){
    //GabbyKraemer
    createCanvas (1000,1000);
    background(255);
    stroke(255, 50, 50);
    strokeWeight(40);
    line(0,1400,500,900);
    line(0,1300,500,800);
    line(0,1200,500,700);
    line(0,1100,500,600);
    line(0,1000,500,500);
    line(0,900,400,500);
    line(0,800,300,500);
    line(0,700,200,500);
    line(0,600,100,500);



stroke(0,143, 238);
strokeWeight(40);
line(500,900,600,1000);
line(500,800,700,1000);
line(500,700,800,1000);
line(500,600,900,1000);
line(500,500,1000,1000);
line(600,500,1100,1000);
line(700,500,1200,1000);
line(800,500,1300,1000);
line(900,500,1400,1000);

stroke(253, 225, 53);
strokeWeight(40);
line(500,425,1000,425);
line(500,350,1000,350);
line(500,275,1000,275);
line(500,200,1000,200);
line(500,125,1000,125);
line(500,50,1000,50);

stroke(133, 133, 133);
strokeWeight(40);
line(50,0,50,500);
line(125,0,125,500);
line(200,0,200,500);
line(275,0,275,500);
line(350,0,350,500);
line(425,0,425,500);

    stroke(0);
    strokeWeight(40);
  line( 1000,500,0,500);
  line(500,1000,500,0);
  line(20,1000,20,0);
  line(980,1000,980,0);
line(0,20,1000,20);
line(0,980,1000,980);

  rectMode(1000,500);
}

  function draw() {
    a = a + 0.03;
   s = cos(a) * 5;
   strokeWeight(.5)
   translate(1000 / 2, 1000 / 2);
     scale(s);
     stroke(255, 50, 50);
     strokeWeight(4);
     line(0,1400,500,900);
     line(0,1300,500,800);
     line(0,1200,500,700);
     line(0,1100,500,600);
     line(0,1000,500,500);
     line(0,900,400,500);
     line(0,800,300,500);
     line(0,700,200,500);
     line(0,600,100,500);

}
