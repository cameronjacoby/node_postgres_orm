var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  Person = require('./models/person'),
  app = express();

app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded());
app.use(methodOverride('_method'));


// displays all people in the database on the index page
app.get('/people', function(req, res) {
  Person.all(function(err, allPeople) {
    if (err) {
      console.error('ERROR!!!', err);
    } else {
      res.render('people/index', {people: allPeople});
    }
  });
});

///// NOT DONE /////
app.get('/people/new', function(req, res) {
  res.render('people/new')
});

// displays a person's profile page
app.get('/people/:id', function(req,res) {
  personId = req.params.id;
  Person.findBy('id', personId, function(err, person) {
    if (err) {
      console.error('ERROR!!!', err);
    } else {
      res.render('people/show', {person: person});
    }
  });
});

///// NOT DONE /////
app.get('/people/:id/edit', function(req,res) {
  res.render('people/edit', {person: {} });
});

///// NOT DONE /////
app.post('/people', function(req, res) {
  res.redirect('/people')
});

///// NOT DONE /////
app.delete('/people/:id', function(req, res) {
  res.redirect('/people');
});

///// NOT DONE /////
app.put('/people/:id', function(req,res) {
  res.redirect('/people');
});


app.listen(3000, function(){
  console.log('server started on localhost:3000');
});




