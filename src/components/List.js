import React from "react";

function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function List() {
    const cars = [
      {id: 1, brand: 'Ford'},
      {id: 2, brand: 'BMW'},
      {id: 3, brand: 'Audi'}
    ];
    return (
      <>
        <h2 style={{color: 'orange'}}>Who lives in my garage?</h2>
        <ul>
          {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
        </ul>
      </>
    );
  }

  export default List;