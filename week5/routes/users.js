const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
/*
- Return all details from user.json file to client as JSON format
*/

const DATA_FILE = path.join(__dirname, '..', 'user.json')

router.get('/profile', (req, res, next) => {
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) return next(err);
    try {
      res.json(JSON.parse(data));
    } catch (e) {
      next(e);
    }
  });
});



/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login', (req, res, next) => {
  const { username, password } = req.body || {};
  fs.readFile(DATA_FILE, (err, data) => {
    if (err) return next(err);
    let user;
    try { user = JSON.parse(data); } catch (e) { return next(e); }

    if (user.username !== username) {
      return res.json({ status: false, message: 'User Name is invalid' });
    }
    if (user.password !== password) {
      return res.json({ status: false, message: 'Password is invalid' });
    }
    return res.json({ status: true, message: 'User Is valid' });
  });
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req, res) => {
  res.send(`<b>${req.params.username} successfully logout.</b>`);
});

module.exports = router; 