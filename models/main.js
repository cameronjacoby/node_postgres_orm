var Person = require('./person');

var Models = {};

Models.Person = Person;

// Models.Person.all(function(err, people) {
//   console.log('Output from Person.all');
//   console.log(people);
// });

// Models.Person.findBy('id', 1, function(err, person) {
//   console.log('Found', person);
//   person.update({firstname: 'Sam', lastname: 'Creek'}, function(err, person){
//     console.log('UPDATED:', person)
//   });
// });

// Models.Person.create({firstname: 'Cameron', lastname: 'Jacoby'}, function(err, person) {
//   console.log('Created', person);
// });

Models.Person.findBy('id', 8, function(err, person) {
  var foundPerson = person;
  foundPerson.destroy();
});

module.exports = Models;