const express = require('express');
const { database } = require('pg/lib/defaults');
const router = express.Router();
const login = require('../lib/loginUser.js');
const reqAndCheckCookie = require('../lib/helper')

module.exports = (db) => {
  router
    .get("/", (req, res) => {
      if (reqAndCheckCookie) {
        res.redirect("/");
      } else {
        res.render('login');
      }
    })
    .post("/", (req, res) => {
      console.log(req.body.email);
      login(req.body.email, req.body.password)
        .then(user => {
          console.log(user);
          if (!user) {
            res.send('Login Failed');
            return;
          }
          //Set cookie
          req.session.userId = user.id;
          res.redirect(`http://192.168.1.198:8080/`);
        })
        .catch(e => res.send(e));

    });
  return router;
};


// router.post('/login', (req, res) => {
//   const {email, password} = req.body;
//   login(email, password)
//     .then(user => {
//       if (!user) {
//         res.send('No User (!User)');
//         return;
//       }
//       req.session.userId = user.id;
//       res.send({user: {name: user.name, email: user.email, id: user.id}});
//     })
//     .catch(e => res.send(e));
// });
