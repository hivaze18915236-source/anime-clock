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
    let r= 200;

    let x=zx+p.cos(angle1)*r;
    let y=zy+p.sin(angle1)*r;

    p.line(zx,zy,x,y);
    angle1+=0.05;

    p.pop();

    p.push();
    p.stroke(0,0,252);
    p.strokeWeight(3);
    let ax=p.width/2
    let ay=p.height/2
    let ar=150;

    let bx=ax+p.cos(angle2)*ar;
    let by=ay+p.sin(angle2)*ar;

    p.line(ax,ay,bx,by);
    angle2+=0.025;

    p.pop();

    p.push();
    p.stroke(252,0,0);
    p.strokeWeight(3);
    let cx=p.width/2
    let cy=p.height/2
    let cr=100;

    let dx=cx+p.cos(angle3)*cr;
    let dy=cy+p.sin(angle3)*cr;

    p.line(cx,cy,dx,dy);
    angle3+=0.01;

    p.pop();

    
    p.push();
    p.translate(0,0);
    p.rotate(ag);
    p.stroke(0,0,0);
    drawGear(90,100,16,p);
    p.pop();
    ag+=0.02

    p.push();
    p.translate(700,700);
    p.rotate(bg);
    p.stroke(2,0,0);
    drawGear(90,100,16,p);
    p.pop();
    bg+=0.005



    



  };
};

new p5(sketch);
