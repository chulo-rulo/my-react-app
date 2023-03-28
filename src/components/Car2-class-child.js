import React from "react";

class Car extends React.Component {
    constructor() {
      super();//recoge todos las propiedades de Car (padre)
      this.state = {color: "red"};//le añade una nueva propiedad
    }
    render() {
      return <h2>I am a {this.state.color} Car!</h2>;
    }
  }
  export default Car;