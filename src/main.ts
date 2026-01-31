import p5 from "p5";
import './style.css';
const drawGear=(innerR:number,outerR:number,teeth:number,p:p5)=>{
    p.push();
    p.rotate(p.frameCount*0.001);

    for (let r=outerR;r>innerR*0.6;r--){
      const shade=p.map(r,innerR*0.6,outerR,220,255);
      p.fill(shade,shade,shade-10);
      p.noStroke();
      p.circle(0,0,r*2);
    }
    p.beginShape();
    p.stroke(200,200,210);
    p.strokeWeight(2);
    p.fill(240,240,245);

    for (let i=0;i<teeth*2;i++){
      const angleG=(i*p.TWO_PI)/(teeth*2);
      const radiusG=i%2===0?outerR:innerR;
      p.vertex(p.cos(angleG)*radiusG,p.sin(angleG)*radiusG);
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

    p.fill(0,0,0,10);
    p.noStroke();
    p.circle(5,5,outerR*2)

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
    let shade=p.map(i,0,r,235,200);
    p.fill(shade,shade*0.97,shade*0.9);
    p.circle(0,0,i*2);
  }
  p.noStroke();
  p.fill(255,255,255,40);
  p.circle(-60,-60,200);

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

    const smoothSec=s+(ms/1000)/1000; 
    const smoothMin=m+smoothSec/60; 
    const smoothHour=h+smoothMin/60; 

    const t=p.millis()/1000;
    const vibration=p.sin(t*20)*0.02;
    const glitch=p.noise(t*0.5)*0.3;
    let shock=0;
    if (p.random()<0.005){
      shock=-0.5;
    }

    let freeze=1;
    if (p.noise(t*0.3)>0.8){
      freeze=0;
    }

    let jamp=0;
    if (p.random()<0.01){
      jamp=p.random(-2,2);
    }

    const angleSec=((p.TWO_PI*smoothSec/60 )*freeze+vibration+glitch+shock+jamp)*3; 
    const angleMin=(p.TWO_PI*smoothMin/60 +vibration*0.2)*1.5; 
    const angleHour=(p.TWO_PI*smoothHour/12 +vibration*0.05)*1;

    
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
    p.stroke(220,220,230);
    p.strokeWeight(1);
    let zx= p.width/2
    let zy= p.height/2
    p.translate(zx,zy);
    p.rotate(angleSec-p.HALF_PI);
    drawMechaHard(220,2,p);
    p.pop();
  
    

    p.push();
    p.stroke(200,200,210);
    p.strokeWeight(3);
    let ax=p.width/2
    let ay=p.height/2
    p.translate(ax,ay);
    p.rotate(angleMin-p.HALF_PI);
    drawPointHard(200,4,15,p);
    p.pop();
    

    
    p.push();
    p.stroke(180,180,190);
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
    ag+=0.02+vibration*0.5;

    p.push();
    p.translate(700,720);
    p.rotate(bg);
    p.stroke(2,0,0);
    drawGear(90,100,16,p);
    p.pop();
    bg+=0.005+vibration*0.5;

    p.push();
    p.translate(1250,550);
    p.rotate(cg);
    p.stroke(80,0,0,);
    drawGear(90,100,16,p);
    p.pop();
    cg+=0.01+vibration*0.5;

    p.push();
    p.translate(50,450);
    p.rotate(dg);
    p.stroke(80,0,0,);
    drawGear(90,100,16,p);
    p.pop();
    dg+=0.005+vibration*0.5;

   


    



  };
};

new p5(sketch);
