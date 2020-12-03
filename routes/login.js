const express = require('express');
const { database } = require('pg/lib/defaults');
const router = express.Router();
const login = require('../lib/loginUser.js');

module.exports = (db) => {
  router
    .get("/", (req, res) => {
      let userId = req.session.userId;

      if (!userId) {
        res.render('login');
      }
      res.redirect("/");
    })
    .post("/", (req, res) => {
      login(req.body.email, req.body.password)
        .then(user => {
          console.log(user);
          if (!user) {
            res.send('Login Failed');
            return;
          }
          //Set cookie
          req.session.userId = user.id;
          res.redirect(`/`);
        })
        .catch(e => res.send(e));

    });
  return router;
};



