const express = require('express');
const router = express.Router();
const Author = require('../models/author');

// GET route for listing authors
router.get('/', async (req, res) => {
    try {
        let searchOptions = {};
        let details = {}; // Renamed from 'Details' to follow JavaScript naming convention
        if (req.query.number != null && req.query.number !== '') {
            details.number = new RegExp(req.query.number, 'i');
        }
        if (req.query.name != null && req.query.name !== '') {
            searchOptions.name = new RegExp(req.query.name, 'i');
        }

        const authors = await Author.find(searchOptions);
        res.render('authors/index', {
            authors: authors,
            searchOptions: req.query,
            details: details // Corrected variable name here
        });
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

// GET route for new author form
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() });
});


// clientView Data updaing and sending to the database
router.get('/clientView', (req, res) => {
    res.render('authors/clientView', { author: new Author() });
});

// POST route for creating a new author
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        carData: req.body.carData,
        // 
    });

    try {
        const newAuthor = await author.save();
        res.redirect('/authors');
    } catch (error) {
        console.error(error);
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating Author or there is no Data in the input fields'
        });
    }
});

module.exports = router;
