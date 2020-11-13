const database = require("./database/database");
const express = require("express");
const bodyParser = require("body-parser");
const { User } = require("./models");
const app = express();
const cors = require("cors");
const volleyball = require("volleyball");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const creds = require("./routes/configNodeMailer");

app.use(volleyball);
app.use(cookieParser()); // popula req.cookie
app.use(
  session({
    secret: ["superfluous cat", "ultra dog"],
    resave: false,
    saveUninitialized: false,
  })
); // popula req.session
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(passport.initialize());
app.use(passport.session());

//Passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
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
    }
  )
);
// How we save the user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
// How we look for the user
passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => done(null, user));
});

//Routing
const routes = require("./routes");
app.use("/api", routes);

//Database
database.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log("SERVER LISTENING AT PORT 8000");
  });
});
