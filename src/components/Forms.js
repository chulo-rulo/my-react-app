import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
    document.getElementById("one").value = " ";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          id="one"
          type="text"
          value={name}
          style={{
            backgroundColor: "black",
            border: "1px solid white",
            marginBottom: "3%",
          }}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

function MyFormTwo() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.username + ", " + inputs.age);
    document.getElementById("onee").value = " ";
    document.getElementById("two").value = " ";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          id="onee"
          style={{ backgroundColor: "black", border: "1px solid white" }}
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
        <br />
      </label>
      <label>
        Enter your age:
        <input
          id="two"
          style={{ backgroundColor: "black", border: "1px solid white" }}
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

function MyTextArea() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    document.getElementById("one_text").value = " ";
    setTextarea(event.target.value);
  };

  return (
    <form>
      <textarea id="one_text" value={textarea} onClick={handleChange} />
    </form>
  );
}

function MySelect() {
    const [myCar, setMyCar] = useState("Volvo");
  
    const handleChange = (event) => {
      setMyCar(event.target.value);
      alert(event.target.value);
    }
  
    return (
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    )
  }

export { MyForm, MyFormTwo, MyTextArea, MySelect };
