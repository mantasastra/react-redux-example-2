import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { addPerson, deletePerson } from "../actions/actions";

class Persons extends Component {
  render() {
    const { persons, onAddPerson, onDeletePerson } = this.props;

    return (
      <div>
        <AddPerson personAdded={onAddPerson} />
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
    onAddPerson: (name, age) => dispatch(addPerson(name, age)),
    onDeletePerson: (id) => dispatch(deletePerson(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
