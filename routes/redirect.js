// routes/redirect.js

const express = require('express');
const router = express.Router();

router.get('/authors/clientView', function(req, res) {
    res.render('authors/clientView'); // Render the view without specifying a layout
});

module.exports = router;
