import { useState } from "react";

function FavoriteColor() {
    const [color, setColor] = useState("red");
  
    return (
      <>
        <h1>My favorite color is <span style={{ color: color}}>{color}</span>!</h1>
        <button
            style = {{ backgroundColor: "blue", color: "white" }}
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
        <button
        style = {{ backgroundColor: "red", color: "white" }}
          type="button"
          onClick={() => setColor("red")}
        >Red</button>
        <button
        style = {{ backgroundColor: "pink", color: "black" }}
          type="button"
          onClick={() => setColor("pink")}
        >Pink</button>
        <button
        style = {{ backgroundColor: "green", color: "white" }}
          type="button"
          onClick={() => setColor("green")}
        >Green</button>
      </>
    );
  }

  function Vehicle() {
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
  
    const updateColor = () => {
        setCar(previousState => {
          return { ...previousState, color: "blue" }
        });
      }
    
      return (
        <>
          <h1>My {car.brand}</h1>
          <p>
            It is a <span style = {{ color: car.color }}>{car.color}</span> {car.model} from {car.year}.
          </p>
          <button
          style = {{ backgroundColor: "blue", color: "white" }}
            type="button"
            onClick={updateColor}
          >Blue</button>
        </>
      )
  }

  export { FavoriteColor, Vehicle };