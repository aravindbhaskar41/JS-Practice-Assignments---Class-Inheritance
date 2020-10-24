// import using require
const Shape = require("Shape");

class Circle extends Shape {
  calculateArea = function () {
    console.log("Inside Circle calculateArea");
  };
}

// export class using module.exports
module.exports("Circle");
