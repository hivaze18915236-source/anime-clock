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
  p.vertex(-width/2,-(length-tipLength));
  p.vertex(width/2,-(length-tipLength));
  p.vertex(0,-length);
  p.endShape(p.CLOSE);
  p.pop();

}




  
const sketch = (p: p5) => {
  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth-20,p.windowHeight );
    canvas.parent("app");
    p.background(0);
  };
   


let angle1=0;
let angle2=0;
let angle3=0;
let ag=0;
let bg=0;
let cg=0;
  p.draw = () => {
   
    p.background(0);
    p.push();
    p.stroke(0,0,0);
    p.ellipse(630,315,500,500);
    p.pop();

    p.push();
    p.stroke(0,252,0);
    p.strokeWeight(3);
    let zx= p.width/2
    let zy= p.height/2
    p.translate(zx,zy);
    p.rotate(angle1);
    drawMechaHard(220,2,p);
    p.pop();
    angle1+=0.05;

    p.push();
    p.stroke(0,0,252);
    p.strokeWeight(3);
    let ax=p.width/2
    let ay=p.height/2
    p.translate(ax,ay);
    p.rotate(angle2);
    drawPointHard(200,8,15,p);
    p.pop();
    angle2+=0.025;

    p.push();
    p.stroke(252,0,0);
    p.strokeWeight(3);
    let cx=p.width/2
    let cy=p.height/2
    p.translate(cx,cy);
    p.rotate(angle3);
    drawPointHard(150,8,15,p);
    p.pop();
    angle3+=0.01

    
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



    



  };
};

new p5(sketch);
