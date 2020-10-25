// import using require
const shape = require("./shape");

class circle extends shape {
  calculateArea = function () {
    console.log("Inside Circle calculateArea");
  };
}

// export class using module.exports
module.exports = circle;
