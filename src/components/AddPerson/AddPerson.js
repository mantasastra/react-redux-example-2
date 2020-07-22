import React from "react";
import "./AddPerson.css";

class AddPerson extends React.Component {
  state = {
    name: "",
    age: "",
  };

  nameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  ageHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  render() {
    const { name, age } = this.state;

    return (
      <div className="AddPerson">
        <input
          type="text"
          placeholder="Name"
          onChange={this.nameHandler}
          value={name}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={this.ageHandler}
          value={age}
        />
        <button onClick={() => this.props.personAdded(name, age)}>
          Add Person
        </button>
      </div>
    );
  }
}
export default AddPerson;
