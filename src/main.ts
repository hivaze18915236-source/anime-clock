import p5 from "p5";
import './style.css';
const drawGear=(innerR:number,outerR:number,teeth:number,p:p5,type:number=0)=>{
    p.push();
    p.rotate(p.frameCount*0.01);

    for (let r=outerR;r>innerR*0.6;r--){
      const shade=p.map(r,innerR*0.6,outerR,220,255);
      p.fill(shade,shade*0.9,shade*0.7);
      p.noStroke();
      p.circle(0,0,r*2);
    }
    p.beginShape();
    p.stroke(200,200,210);
    p.strokeWeight(2);
    p.fill(240,240,245);

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

 
  p.beginShape();
  p.vertex(0,0);
  p.vertex(-width*0.3, -length*0.7);
  p.vertex(0, -length);
  p.vertex(width*0.3, -length*0.7);
  p.vertex(0,0);
  p.endShape(p.CLOSE);

  
  for (let i=1;i<=3;i++){
    const y = -length*i/4;
    p.ellipse(-width*0.15, y, width*0.15, width*0.05);
    p.ellipse(width*0.15, y, width*0.15, width*0.05);
  }

  
  p.noFill();
  p.stroke(255,220,150,100);
  p.strokeWeight(1);
  p.line(0, -length, 0, -length*0.85);


  p.pop();
};

const drawHandBaseMecha=(r:number,p:p5)=>{
  p.push();
  p.stroke(0,252,252);
  p.fill(100,100,100);
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
  p.noFill();
  p.stroke(100,80,40);
  p.strokeWeight(2)
  for(let i=0;i<6;i++){
    p.circle(0,0,r-i*20);
    let c1=p.color(255,215,0);
    let c2=p.color(255,250,200);
    p.fill(p.lerpColor(c2,c1,i/r));

  }

  p.pop();
}
  
const sketch = (p: p5) => {
  p.setup = () => {

    const canvas = p.createCanvas(p.windowWidth-20,p.windowHeight );
    canvas.parent("app");
    p.background(0);
  };
   
const drawMetalFace=(r:number,p:p5)=>{
  p.push();
  p.noStroke();
  for(let i=r; i>0;i--){
    let shade=p.map(i,0,r,235,200);
    p.fill(shade,shade*0.97,shade*0.9);
    p.circle(0,0,i*2);
  }
  p.pop();
}

const drawBrassRing=(r:number,p:p5)=>{
  p.push();
  p.noFill();
  p.stroke(120,110,90);
  p.strokeWeight(25);
  p.circle(0,0,r*2);
  p.pop();
}

const drawRivets=(r:number,p:p5)=>{
  p.push();
  for(let i=0;i<12;i++){
    p.push();
    p.rotate(p.TWO_PI*i/12);
    p.fill(220);
    p.stroke(150);
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
  p.draw = () => {
    p.background(0);

    const h=p.hour()%12; 
    const m=p.minute(); 
    const s=p.second(); 
    const ms=p.millis(); 
    
    const smoothSec=s+(ms/1000)/1000;
    const smoothMin=m+smoothSec/60; 
    const smoothHour=h+smoothMin/60; 
    const t=p.millis()/1000; 
    const vibration=p.sin(t*20)*0.02;
    const glitch=p.noise(t*0.5)*0.3; 

    let shock=0; 
    if (p.random()<0.005){ 
      shock=-0.0001; }

    
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
    p.stroke(180,220,210);
    p.strokeWeight(1);
    p.translate(px,py);
    p.rotate(angleSec);
    drawSteampunkHand(200,20,p);
    p.pop();
  
    

    p.push();
    p.stroke(180,200,210);
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
    drawGear(90,100,16,p,1);
    p.pop();
    bg+=0.005;

    p.push();
    p.translate(1110,50);
    p.rotate(cg);
    p.stroke(80,0,0);
    drawGear(90,100,16,p,2);
    p.pop();
    cg+=0.01;

    p.push();
    p.translate(10,700);
    p.rotate(dg);
    p.stroke(80,0,0);
    drawGear(90,100,16,p,1);
    p.pop();
    dg+=0.005;

    p.push();
    p.translate(100,400);
    p.rotate(dg);
    p.stroke(80,0,0);
    drawGear(90,100,16,p,2);
    p.pop();
    eg-=0.02;

    p.push();
    p.translate(1200,400);
    p.rotate(dg);
    p.stroke(80,0,0);
    drawGear(90,100,16,p,0);
    p.pop();
    fg+=0.005;

   p.push();
   drawMouseGear(300, 150, 40, 60, 12, p); 
   drawMouseGear(p.width - 300, 150, 50, 70, 14, p); 
   drawMouseGear(300, p.height - 150, 35, 55, 10, p); 
   drawMouseGear(p.width - 300, p.height - 150, 45, 65, 16, p); 
   p.pop();

   



    




  };
};

new p5(sketch);
