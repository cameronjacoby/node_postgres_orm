var Person = require('./person');

var Models = {};

Models.Person = Person;

Models.Person.all(function(err, people) {
  if (err) {
    console.error('ERROR!!!', err);
  } else {
    console.log('Output from Person.all');
    console.log(people);
  }
});

Models.Person.findBy('id', 3, function(err, person) {
  if (err) {
    console.error('ERROR!!!', err);
  } else {
    console.log('Found', person);
    person.update({firstname: 'Mario', lastname: 'Delgado', message: 'Hi, there! I\'m new to this website!'}, function(err, person) {
      if (err) {
        console.error('ERROR!!!', err);
      } else {
        console.log('UPDATED:', person);
      }
    });
  }
});

Models.Person.create({firstname: 'Donna', lastname: 'Jacoby', message: 'Excited to be a part of this site!'}, function(err, person) {
  if (err) {
    console.error('ERROR!!!', err);
  } else {
    console.log('Created', person);
  }
});

Models.Person.findBy('id', 5, function(err, person) {
  if (err) {
    console.error('ERROR!!!', err);
  } else {
    var foundPerson = person;
    foundPerson.destroy(function(err) {
      if (err) {
        console.error('ERROR!!!', err);
      } else {
        console.log('DELETED');
      }
    });
  }
});

module.exports = Models;




