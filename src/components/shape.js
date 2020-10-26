import React from "react";
class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.color = "Red";
  }

  drawShape() {
    console.log("Inside Shape drawShape");
  }

  calculateArea() {
    console.log("Inside Shape calculateArea");
  }
}

// export class using module.exports
module.exports = Shape;
