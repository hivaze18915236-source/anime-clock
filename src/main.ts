import p5 from "p5";
import './style.css';

const sketch = (p: p5) => {
  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth-20,p.windowHeight );
    canvas.parent("app");
    p.background(220);
  };

  p.draw = () => {
    p.circle(p.mouseX, p.mouseY, 20);
  };
};

new p5(sketch);
