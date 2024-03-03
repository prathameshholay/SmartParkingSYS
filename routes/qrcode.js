// routes/qrcode.js

const express = require('express');
const router = express.Router();
const qr = require('qr-image');

// Define the fixed text for the QR code
const fixedText = "https://prathameshholay.github.io/authors/clientView"; // Replace with your desired fixed text or URL

router.get('/', function(req, res) {
    const qrSvg = qr.imageSync(fixedText, { type: 'svg' });
    res.type('svg');
    res.send(qrSvg);
});

module.exports = router;
