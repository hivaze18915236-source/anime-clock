import p5 from "p5";
import './style.css';
const drawGear=(innerR:number,outerR:number,teeth:number,p:p5)=>{
    p.push();
    p.beginShape();
    for (let i=0; i<teeth*2;i++){
      const ga=i*p.TWO_PI/(teeth*2);
      const gr=(i%2===0)?outerR:innerR;
      p.vertex(p.cos(ga)*gr,p.sin(ga)*gr);
    }
    p.endShape(p.CLOSE);
    p.fill(0);
    p.ellipse(0,0,innerR*0.8);
    p.pop();

  }
const drawMechaHard=(length:number,width:number,p:p5)=>{
  p.push();
  p.rectMode(p.CENTER);
  p.rect(0,-length/2,width,length);
  p.circle(0,0,width*0.5);
  p.pop();
}    


const drawPointHard=(length:number,width:number,tipLength:number,p:p5)=>{
  p.push();
  p.rectMode(p.CENTER);
  p.rect(0,-(length-tipLength)/2,width,length-tipLength);
  p.beginShape();
  p.vertex(-width,-(length-tipLength));
  p.vertex(width,-(length-tipLength));
  p.vertex(0,-length);
  p.endShape(p.CLOSE);
  p.pop();

}

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
    let shade=p.map(i,0,r,190,200);
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
  p.draw = () => {
    p.background(0);


    const h=p.hour()%12;
    const m=p.minute();
    const s=p.second();
    const ms=p.millis();

    const smoothSec=s+ms/1000;
    const smoothMin=m+smoothSec/60;
    const smoothHour=h+smoothMin/60;

    const angleSec=p.TWO_PI*s/60;
    const angleMin=p.TWO_PI*smoothMin/60;
    const angleHour=p.TWO_PI*smoothHour/12;    

    
    p.push();
    p.translate(p.width/2,p.height/2);

    drawMetalFace(250,p);
    drawBrassRing(250,p);
    drawInnerDecoration(200,p);
    drawRivets(235,p);
    drawClockNumber(210,p);
    drawRadialLines(240,p);


    p.pop();

    p.push();
    p.stroke(100,40,20);
    p.strokeWeight(3);
    let zx= p.width/2
    let zy= p.height/2
    p.translate(zx,zy);
    p.rotate(angleSec-p.HALF_PI);
    drawMechaHard(220,2,p);
    p.pop();
    

    p.push();
    p.stroke(120,80,30);
    p.strokeWeight(3);
    let ax=p.width/2
    let ay=p.height/2
    p.translate(ax,ay);
    p.rotate(angleMin-p.HALF_PI);
    drawPointHard(200,4,15,p);
    p.pop();
    

    
    p.push();
    p.stroke(60,30,20);
    p.strokeWeight(3);
    let cx=p.width/2
    let cy=p.height/2
    p.translate(cx,cy);
    p.rotate(angleHour-p.HALF_PI);
    drawPointHard(150,4,15,p);
    p.fill(150);
    drawHandBaseMecha(6,p);
    p.pop();
  
    p.push();
    p.translate(0,0);
    p.rotate(ag);
    p.stroke(0,0,0);
    drawGear(90,100,16,p);
    p.pop();
    ag+=0.02

    p.push();
    p.translate(700,680);
    p.rotate(bg);
    p.stroke(2,0,0);
    drawGear(90,100,16,p);
    p.pop();
    bg+=0.005

    p.push();
    p.translate(1250,450);
    p.rotate(cg);
    p.stroke(80,0,0,);
    drawGear(90,100,16,p);
    p.pop();
    cg+=0.01;

    p.push();
    p.translate(50,450);
    p.rotate(dg);
    p.stroke(80,0,0,);
    drawGear(90,100,16,p);
    p.pop();
    dg+=0.005;

   


    



  };
};

new p5(sketch);
