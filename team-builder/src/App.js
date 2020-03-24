import React, { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
// import Form from "./Form";

function App() {
  const [members, setMembers] = useState([
    {
      id: uuid(),
      name: "Adonis Puente",
      email: "adonis.puente@gmail.com",
      role: "Goofy Goober"
    },
    {
      id: uuid(),
      name: "Senior Bebop",
      email: "Senior.Bebop@gmail.com",
      role: "Front-end Developer"
    }
  ]);

  const [people, setPeople] = useState(members);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role: ""
  });

  const onInputChange = event => {
    const inputThatChanged = event.target.name;

    const newValueForInput = event.target.value;

    setFormValues({
      ...formValues,

      [inputThatChanged]: newValueForInput
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();

    const newPeople = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    };
    setPeople([...people, newPeople]);
  };

  return (
    <div className="App">
      <Form
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />
      <h1> Members List </h1>
      {people.map(item => (
        <div key={item.id}>
          {item.name} {item.email} {item.role}
        </div>
      ))}
    </div>
  );
}

function Form(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <label>
        {" "}
        Name
        <input
          onChange={props.onInputChange} // callback takes an event object
          value={props.formValues.name}
          name="name"
          type="text"
        />
      </label>
      <br />

      <label>
        {" "}
        Email
        <input
          onChange={props.onInputChange}
          value={props.formValues.email}
          name="email"
          type="text"
        />
      </label>
      <br />
      <label>
        {" "}
        role
        <input
          onChange={props.onInputChange}
          value={props.formValues.role}
          name="role"
          type="text"
        />
      </label>
      <br />

      <input type="submit" />
    </form>
  );
}
export default App;
