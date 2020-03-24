import React, { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import App from "./App";

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
          email="email"
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
          role="role"
          type="text"
        />
      </label>
      <br />

      <input type="submit" />
    </form>
  );
}

export default Form;
