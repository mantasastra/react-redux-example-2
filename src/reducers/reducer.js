import * as types from "../actions/actionTypes";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PERSON: {
      const person = {
        id: Math.random(), // Not unique
        name: "Person",
        age: Math.floor(Math.random() * 40),
      };

      return {
        ...state,
        persons: state.persons.concat(person),
      };
    }
    case types.DELETE_PERSON: {
      return {
        ...state,
        persons: state.persons.filter((person) => person.id !== action.id),
      };
    }
  }

  return state;
};

export default reducer;
