import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./logo.svg";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import Car from "./components/Car-with-Garage";
import CarState from "./components/Car-state";
import Football from "./components/Football";
import GarageInc from "./components/Garage";
import reportWebVitals from "./reportWebVitals";
import List from "./components/List";
import { MyForm, MyFormTwo, MyTextArea, MySelect } from "./components/Forms";
import Delux from "./components/Styles";
import { FavoriteColor, Vehicle } from "./components/UseState";
import { Timer, Counter } from "./components/UseEffect";
import Component1 from "./components/UseContext";
import Component from "./components/UseContextSolution";
import { AppRef, InputFocus, PreviousNewValues } from "./components/UseRef";

const myArray = ["apple", "banana", "orange"];
let myList;

const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

const saludo = () => <h1>Hola Mundo!</h1>;
const [add, subtract, multiply, divide] = calculate(4, 7);

const x = 5;
const myResult = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

const cars = ['Ford', 'BMW', 'Audi'];

function Appp() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <header className="App-header">
        {saludo()}
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width="300"
          height="300"
        />
        <p>Esto es Capgemini, baby...</p>
        <a
          className="App-link"
          href="https://www.capgemini.com/es-es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React or Die
        </a>
      </header>
      <div className="list">{(myList = myArray.map((item) => <p>{item}&nbsp;&nbsp;</p>))}</div>
      <div className="suma"><p>{calculate(4, 7)}</p></div>
      <div className="vehicle"><p>{myVehicle(vehicleOne)}</p></div>
      <div className="jsx"><p>{myElement}</p></div>
      <div className="result"><p>{myResult}</p></div>
      <div className="garage"><p><Garage /></p></div>
      <div className="state"><p><CarState /></p></div>
      <div className="state">< Football /></div>
      <div><GarageInc cars={cars}/></div>
      <div>< List/></div>
      <div className="state">< MyForm/></div>
      <div className="state">< MyFormTwo/></div>
      <div>< MyTextArea/></div>
      <div className="select"><MySelect /></div>
      <div><Delux /></div>
      <div><FavoriteColor /></div>
      <div><Vehicle /></div>
      <div><Timer /></div>
      <div><Counter /></div>
      <div><Component1 /></div>
      <div><Component /></div>
      <div><AppRef /></div>
      <div><InputFocus /></div><br />
      <div><PreviousNewValues /></div>
    </div>
  );
}

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}
function myVehicle({type, color, brand, model}) {
  return 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}

/**
 * Function in function
 * @returns Garage
 */
function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  Appp()
  /* {<React.StrictMode>
    <App />
  </React.StrictMode>} */
);
reportWebVitals();
