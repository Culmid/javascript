// Destructure an object
//
// 1. Destructure the following values from the
//    object:
//    - firstName
//    - isAdmin
//    - branchName (nested in location)

const person = {
  firstName: "Michael",
  lastName: "Scott",
  position: "Regional Manager",
  isAdmin: true,
  age: 40,
  location: {
    coordinates: [104, 200],
    branchName: "Scranton",
  },
};

const {firstName, isAdmin, location: {branchName}} = person;

const result = [firstName, isAdmin, branchName]; // Write your answer here

// Do not remove this and do not change the
//    variable 'result' name above. It's
//    used for the tests.
module.exports = result;
