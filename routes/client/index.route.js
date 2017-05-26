const express = require('express');
const path = require('path');

const router = express.Router();
const dist = '../../client/dist';

const sendIndex = (req, res) => {

  res.sendFile(path.join(__dirname, dist, 'index.html'));

};

router.get('/', sendIndex);
router.get('/login', sendIndex);
router.get('/signup', sendIndex);
router.get('/home', sendIndex);
router.get('/home/login', sendIndex);
router.get('/home/signup', sendIndex);
router.get('/profile/:id', sendIndex);

module.exports = router;
