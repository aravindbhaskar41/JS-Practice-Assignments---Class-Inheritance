class Shape {
  constructor(props) {
    this.color = "Red";
  }

  drawShape = function () {};

  calculateArea = function () {
    console.log("Inside Shape calculateArea");
  };
}

// export class using module.exports
module.exports("Shape");
