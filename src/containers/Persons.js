import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as types from "../actions/actionTypes";

class Persons extends Component {
  render() {
    const { persons, onAddPerson, onDeletePerson } = this.props;

    return (
      <div>
        <AddPerson personAdded={onAddPerson} />
        {console.log(persons)}
        {persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => onDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: () =>
      dispatch({
        type: types.ADD_PERSON,
      }),
    onDeletePerson: (id) => dispatch({ type: types.DELETE_PERSON, id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
