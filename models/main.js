var Person = require('./person');

var Models = {};

Models.Person = Person;

Models.Person.all(function(err, people) {
  if (err) {
    console.log('ERROR!!!', err);
  } else {
    console.log('Output from Person.all');
    console.log(people);
  }
});

Models.Person.findBy('id', 5, function(err, person) {
  if (err) {
    console.log('ERROR!!!', err);
  } else {
    console.log('Found', person);
    person.update({firstname: 'Wesley', lastname: 'Snipes'}, function(err, person) {
      if (err) {
        console.log('ERROR!!!', err);
      } else {
        console.log('UPDATED:', person);
      }
    });
  }
});

Models.Person.create({firstname: 'Elizabeth', lastname: 'Lemon'}, function(err, person) {
  if (err) {
    console.log('ERROR!!!', err);
  } else {
    console.log('Created', person);
  }
});

Models.Person.findBy('id', 10, function(err, person) {
  if (err) {
    console.log('ERROR!!!', err);
  } else {
    var foundPerson = person;
    foundPerson.destroy(function(err) {
      if (err) {
        console.log('ERROR!!!', err);
      } else {
        console.log('DELETED');
      }
    });
  }
});

module.exports = Models;




