import p5 from "p5";
import './style.css';
const drawGear=(innerR:number,outerR:number,teeth:number,p:p5,type:number=0)=>{
    p.push();

    for (let r = outerR; r > innerR * 0.6; r--) {
    const c1 = p.color(250, 250, 250); 
    const c2 = p.color(140, 140, 140); 
    const col = p.lerpColor(c1, c2, (r - innerR * 0.6) / (outerR - innerR * 0.6));
    p.fill(col);
    p.noStroke();
    p.circle(0, 0, r * 2);
  }
    p.beginShape();
    p.stroke(180,180,190);
    p.strokeWeight(6);
    p.fill(220,220,225);
    p.circle(0,0,innerR*1.2);

    for (let i=0;i<teeth*2;i++){
      const angleG = (i * p.TWO_PI) / (teeth * 2);
    let radiusG;
    if (type === 0) {
      
      radiusG = i % 2 === 0 ? outerR : innerR;
    } else if (type === 1) {
     
      radiusG = i % 2 === 0 ? outerR * 1.05 : innerR * 0.9;
    } else {
     
      radiusG = i % 2 === 0 ? outerR * 0.95 : innerR * 1.05;
    }
    p.vertex(p.cos(angleG) * radiusG, p.sin(angleG) * radiusG);
  }
    p.endShape(p.CLOSE);

    p.stroke(255, 255, 255, 50);
    p.strokeWeight(1);
for (let i = 0; i < 10; i++) {
    p.line(0, 0, p.cos(i * p.TWO_PI / 10) * outerR, p.sin(i * p.TWO_PI / 10) * outerR);
  }

      
  

    p.noFill();
    p.stroke(200,190,170);
    p.strokeWeight(6);
    p.circle(0,0,innerR*1.2);

    p.noStroke();
    p.fill(200,200,215);
    for (let i=0;i<6;i++){
      p.push();
      p.rotate((p.TWO_PI*i)/6);
      p.circle(0,-innerR*0.6,innerR*0.25);
      p.pop();
    }

    p.fill(200,230,255);
    p.stroke(180,200,220);
    p.strokeWeight(3);
    p.circle(0,0,innerR*0.35);

    p.noStroke();
    p.fill(255, 255, 255, 30);
    p.circle(-20, -20, 40);

   
    p.pop();

   }

const drawMouseGear=(mx:number,my:number,rInner:number,rOuter:number,teeth:number,p:p5)=>{
  p.push();
  p.translate(mx,my);
  const angleM=p.map(p.mouseX,0,p.width,-p.TWO_PI,p.TWO_PI)+p.map(p.mouseY,0,p.height,-p.TWO_PI/2,p.TWO_PI/2);
  p.rotate(angleM);
  drawGear(rInner,rOuter,teeth,p);
  p.pop();
}



const drawSteampunkHand = (length:number, width:number, p:any) => {
  p.push();

  p.circle(0,0,width*1.5);

  p.fill(220,240,190);
  p.stroke(255,220,150);
  p.strokeWeight(2);
  p.circle(0,0,width*1.5);

  p.fill(180,150,80);
  p.stroke(220,190,120);
  p.strokeWeight(2);

  p.beginShape();
  p.vertex(0,0);
  p.vertex(-width*0.3, -length*0.7);
  p.vertex(0, -length);
  p.vertex(width*0.3, -length*0.7);
  p.vertex(0,0);
  p.endShape(p.CLOSE);

  p.noStroke();
  for (let i=1;i<=3;i++){
    const y = -length*i/4;
    p.ellipse(-width*0.15, y, width*0.15, width*0.05);
    p.ellipse(width*0.15, y, width*0.15, width*0.05);
  }

  
  p.noFill();
  p.stroke(255,255,255,100);
  p.strokeWeight(1);
  p.line(0, -length*0.1, 0, -length*0.85);



  p.pop();
};

const drawHandBaseMecha=(r:number,p:p5)=>{
  p.push();
  p.stroke(240,240,180);
  p.fill(160,130,70);
  p.circle(0,0,r*2);
  p.fill(50,50,50);
  p.circle(0,0,r);
  p.pop();

}

const roman = ["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"];


const drawClockNumber=(radius:number,p:p5)=>{
  p.push();
  p.fill(90,70,50);
  p.noStroke();
  p.strokeWeight(1);
  p.textAlign(p.CENTER,p.CENTER);
  p.textSize(30);

  for (let i=0;i<12;i++){
    const angleT=p.TWO_PI*i/12-p.HALF_PI;
    const Nx=p.cos(angleT)*radius;
    const Ny=p.sin(angleT)*radius;
    p.text(roman[i],Nx,Ny);
  }
  p.pop();
}

const drawInnerDecoration=(r:number,p:p5)=>{
  p.push();
   for (let i = 0; i < 6; i++) {
    const rr = r - i * 50;

    
    const shade = p.map(i, 0, 5, 180, 40);

    p.fill(shade, shade * 0.95, shade * 0.85); 
    p.stroke(120, 100, 60);
    p.strokeWeight(2);

    p.circle(0, 0, rr);
  }

  p.pop();
}

  
const sketch = (p: p5) => {
  interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number; 
  speed: number;     
}

let stars: Star[] = [];
  p.setup = () => {
  const canvas = p.createCanvas(p.windowWidth-20, p.windowHeight);
  canvas.parent("app");
  for (let i = 0; i < 1000; i++) {
    stars.push({
      x: p.random(p.width),
      y: p.random(p.height),
      size: p.random(1, 3),
      baseAlpha: p.random(50, 200),
      speed: p.random(0.5, 2),
    });
  }
};
   
const drawMetalFace=(r:number,p:p5)=>{
  p.push();
 for (let i = r; i > 0; i--) {
    const c1 = p.color(255, 255, 255);
    const c2 = p.color(180, 160, 120);
    const col = p.lerpColor(c1, c2, i / r);
    p.fill(col);
    p.noStroke();
    p.circle(0, 0, i * 2);
  }
  p.pop();
}

const drawBrassRing=(r:number,p:p5)=>{
  p.push();
  p.noFill();
  p.stroke(150,120,60);
  p.strokeWeight(25);
  p.circle(0,0,r*2);
  p.pop();
}

const drawRivets=(r:number,p:p5)=>{
  p.push();
  for(let i=0;i<12;i++){
    p.push();
    p.rotate(p.TWO_PI*i/12);
    p.fill(240);
    p.stroke(200);
    p.circle(0,-r,10);
    p.pop();
  }
p.pop();
}

const drawRadialLines=(r:number,p:p5)=>{
  p.push();
  p.stroke(30,30,30,40);
  for (let i=0;i<60;i++){
    p.rotate(p.TWO_PI/60);
    p.line(0,-r,0,-r+10);
  }
  p.pop();
}


let ag=0;
let bg=0;
let cg=0;
let dg=0;
let eg=0;
let fg=0;
let gg=0;
let hg=0;
let ig=0;
let jg=0;
  p.draw = () => {
    p.background(0);

     p.noStroke();
  for (let star of stars) {
    const alpha = star.baseAlpha + p.sin(p.frameCount * 0.05 * star.speed) * 50;
    p.fill(255, 255, 200, alpha);
    p.circle(star.x, star.y, star.size);
  }
    const h=p.hour()%12; 
    const m=p.minute(); 
    const s=p.second(); 
    const ms=p.millis(); 
    
    const smoothSec=s+(ms/1000)/1000;
    const smoothMin=m+smoothSec/60; 
    const smoothHour=h+smoothMin/60; 
    const t=p.millis()/1000; 
    const vibration=p.sin(t*0.4)*0.02;
    const glitch=p.noise(t*0.1)*0.3; 

    let shock=0; 
    if (p.random()<0.0005){ 
      shock=-0.00001; }

    
    const angleSec=((p.TWO_PI*smoothSec/60 )*vibration+glitch+shock)*8; 
    const angleMin=(p.TWO_PI*smoothMin/60 +vibration*0.2)*8; 
    const angleHour=(p.TWO_PI*smoothHour/12 +vibration*0.05)*8;  

    const px=p.width/2;
    const py=p.height/2;



    
    p.push();
    p.translate(px,py);

    drawMetalFace(250,p);
    drawBrassRing(250,p);
    drawInnerDecoration(200,p);
    drawRivets(235,p);
    drawClockNumber(210,p);
    drawRadialLines(240,p);

   

    p.pop();



    p.push();
    p.stroke(180,200,190);
    p.strokeWeight(1);
    p.translate(px,py);
    p.rotate(angleSec);
    drawSteampunkHand(200,20,p);
    p.pop();
  
    

    p.push();
    p.stroke(180,200,180);
    p.strokeWeight(3);
    p.translate(px,py);
    p.rotate(angleMin);
    drawSteampunkHand(150,20,p);
    p.pop();
    

    
    p.push();
    p.stroke(180,180,190);
    p.strokeWeight(3);
    p.translate(px,py);
    p.rotate(angleHour);
    drawSteampunkHand(100,20,p);
    p.fill(150);
    drawHandBaseMecha(6,p);
    p.pop();
  
  
    p.push();
    p.translate(0,0);
    p.rotate(ag);
    p.stroke(0,0,0);
    drawGear(90,100,16,p,0);
    p.pop();
    ag+=0.02;

    p.push();
    p.translate(1200,710);
    p.rotate(bg);
    p.stroke(2,0,0);
    drawGear(100,120,20,p,1);
    p.pop();
    bg-=0.005;

    p.push();
    p.translate(1110,50);
    p.rotate(cg);
    p.stroke(80,0,0);
    drawGear(50,90,12,p,2);
    p.pop();
    cg-=0.01;

    p.push();
    p.translate(10,700);
    p.rotate(dg);
    p.stroke(80,0,0);
    drawGear(90,100,16,p,1);
    p.pop();
    dg+=0.005;

    p.push();
    p.translate(100,400);
    p.rotate(eg);
    p.stroke(80,0,0);
    drawGear(90,100,16,p,2);
    p.pop();
    eg-=0.15;

    p.push();
    p.translate(1200,400);
    p.rotate(fg);
    p.stroke(80,0,0);
    drawGear(90,100,16,p,0);
    p.pop();
    fg+=0.005;

    p.push();
    p.translate(700,-40);
    p.rotate(gg);
    p.stroke(80,0,0);
    drawGear(100,110,16,p,1);
    p.pop();
    gg-=0.01;

    p.push();
    p.translate(700,700);
    p.rotate(hg);
    p.stroke(80,0,0);
    drawGear(90,100,16,p,2);
    p.pop();
    hg-=0.02;

    p.push();
    p.translate(40,200);
    p.rotate(ig);
    p.stroke(80,0,0);
    drawGear(80,90,10,p,1);
    p.pop();
    ig+=0.025;

    p.push();
    p.translate(400,700);
    p.rotate(jg);
    p.stroke(80,0,0);
    drawGear(70,85,6,p,0);
    p.pop();
    jg-=0.02;



   p.push();
   drawMouseGear(300, 150, 40, 60, 12, p); 
   drawMouseGear(p.width - 300, 150, 50, 70, 14, p); 
   drawMouseGear(300, p.height - 150, 35, 55, 10, p); 
   drawMouseGear(p.width - 300, p.height - 150, 45, 65, 16, p); 
   p.pop();

   



    




  };
};

new p5(sketch);
