import p5 from "p5";
import './style.css';

const sketch = (p: p5) => {
  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth-20,p.windowHeight );
    canvas.parent("app");
    p.background(0);
  };

  p.draw = () => {
    let angle1=0;
    let angle2=0;
    let angle3=0;

    p.push();
    p.ellipse(200,200,400,400);
    p.pop();

    p.push();
    p.stroke(0,252,0);
    p.strokeWeight(3);
    let zx=p.width/2
    let zy=p.height/2
    let r=150;

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
    angle2+=0.05;

    p.pop();

    p.push();
    p.stroke(252,0,0);
    p.strokeWeight(3);
    let cx=p.width/2
    let cy=p.height/2
    let cr=150;

    let dx=cx+p.cos(angle3)*cr;
    let dy=cy+p.sin(angle3)*cr;

    p.line(cx,cy,dx,dy);
    angle3+=0.05;

    p.pop();

    



  };
};

new p5(sketch);
