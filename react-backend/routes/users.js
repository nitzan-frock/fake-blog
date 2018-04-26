var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res) {
  //res.send('respond with a resource');

  res.send({
    id: 1,
    username: "testuser1"
  }, {
    id: 2, 
    username: "testuser2"
  });
});

module.exports = router;
