var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  Person = require('./models/person'),
  app = express();

app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));


// displays all people in the database on the index page
app.get('/people', function(req, res) {
  Person.all(function(err, allPeople) {
    if (err) {
      console.error('ERROR!!!', err);
    } else {
      res.render('index', {people: allPeople});
    }
  });
});

// renders the sign up page (form creates a new person)
app.get('/people/new', function(req, res) {
  res.render('new');
});

// displays a person's profile page
app.get('/people/:id', function(req,res) {
  personId = req.params.id;
  Person.findBy('id', personId, function(err, foundPerson) {
    if (err) {
      console.error('ERROR!!!', err);
    } else {
      res.render('show', {person: foundPerson});
    }
  });
});

// displays the edit form with the found person's info pre-filled
app.get('/people/:id/edit', function(req,res) {
  personId = req.params.id;
  Person.findBy('id', personId, function(err, foundPerson) {
    if (err) {
      console.error('ERROR!!!', err);
    } else {
      res.render('edit', {person: foundPerson});
    }
  });
});

// creates a new person and posts to the /people page
app.post('/people', function(req, res) {
  newPerson = Person.create(req.body, function(err, newPerson) {
    if (err) {
      console.error('ERROR!!!', err);
    } else {
      res.redirect('/people');
    }
  });
});

// deletes the person
app.delete('/people/:id', function(req, res) {
  personId = req.params.id;
  Person.findBy('id', personId, function(err, person) {
    if (err) {
      console.error('ERROR!!!', err);
    } else {
      person.destroy(function(err) {
        if (err) {
          console.error('ERROR!!!', err);
        } else {
          res.redirect('/people');
        }
      });
    }
  });
});

// updates the person's info on submit of edit form
app.put('/people/:id', function(req,res) {
  personId = req.params.id;
  Person.findBy('id', personId, function(err, person) {
    if (err) {
      console.error('ERROR!!!', err);
    } else {
      person.update({firstname: req.body.firstname, lastname: req.body.lastname, message: req.body.message, icon: req.body.icon, facebook: req.body.facebook, twitter: req.body.twitter}, function(err, person) {
        if (err) {
          console.error('ERROR!!!', err);
        } else {
          res.redirect('/people');
        }
      });
    }
  });
});


app.listen(3000, function(){
  console.log('server started on localhost:3000');
});