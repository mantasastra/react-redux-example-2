import * as types from "./actionTypes";

export function addPerson(name, age) {
  const person = {
    id: Math.random(), // Not unique
    name,
    age,
  };

  return {
    type: types.ADD_PERSON,
    payload: person,
  };
}

export function deletePerson(id) {
  return {
    type: types.DELETE_PERSON,
    id,
  };
}
