class Shape {
  draw() {
    return "I am generic shape";
  }
}
class Angle {
  draw() {
    return "I am right angle";
  }
}
class Square {
  draw() {
    return "I am a square";
  }
}
class Circle {
  draw() {
    return "I am a circle";
  }
}

shapeObj = new Shape();
console.log(shapeObj.draw());

angleObj = new Angle();
console.log(angleObj.draw());

squareObj = new Square();
console.log(squareObj.draw());

circleObj = new Circle();
console.log(circleObj.draw());
