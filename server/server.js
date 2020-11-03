const database = require('../database/database')
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const http = require("http")
const {User} = require('../models')

const cookieParser = require("cookie-parser")
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require('passport-local').Strategy;

app.use(cookieParser()) // popula req.cookie
app.use(session({secret: ["superfluous cat", "ultra dog"], resave: false, saveUninitialized: true})) // popula req.session
app.use(passport.initialize())
app.use(passport.session())


//*Passport----------------------------------------------------------------------------
passport.use(new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  function (email, password, done) {
    User.findOne({where: {email}})
      .then((user) => {
        if (!user) {

          return done(null, false); // user not found
        }

        user.hash(password, user.salt).then((hash) => {
          if (hash !== user.password) {
            return done(null, false); // invalid password
          }
          done(null, user); // success :D
        });
      })
      .catch(done);
  }));
// How we save the user
passport.serializeUser(function (user, done) {done(null, user.id)})
// How we look for the user
passport.deserializeUser(function (id, done) {User.findByPk(id).then(user => done(null, user))})



app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// 

database.sync({force: true})
  .then(() => {
    http.createServer(app)
      .listen(process.env.PORT || 8000, () => {
        console.log("SERVER LISTENING AT PORT 8000")
      })
  });