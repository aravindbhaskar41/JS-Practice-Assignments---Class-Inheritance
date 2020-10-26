// import using require
const Shape = require("./shape");

class Circle extends Shape {
  calculateArea() {
    console.log("Inside Circle calculateArea");
  }
}

// export class using module.exports
module.exports = Circle;
