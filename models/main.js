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
    person.update({firstname: 'Mario', lastname: 'Delgado', message: 'Hi, there! I\'m new to this website!', photo: 'http://static.businessinsider.com/image/52e9200069beddde035b3f96/image.jpg'}, function(err, person) {
      if (err) {
        console.error('ERROR!!!', err);
      } else {
        console.log('UPDATED:', person);
      }
    });
  }
});

Models.Person.create({firstname: 'Donna', lastname: 'Jacoby', message: 'Excited to be a part of this site!', icon: 'http://static.businessinsider.com/image/52e9200269bedd2d7d5b3f9c/image.jpg'}, function(err, person) {
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