const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.AW_SERVER_PORT || 3000;
const ENVIRONMENT = process.env.AW_ENVIRONMENT;

const statics = express.static(path.resolve(__dirname, 'build'));

const sourceMapFilter = (req, res, next) => {
    const mapMatch = req.url.match(/^\/static\/js\/main.+\.js.map$/);

    if (!mapMatch) {
        return statics(req, res, next);
    }

    // no filtering done if we are running on dev or have a proper token
    if (ENVIRONMENT === 'development') {
        return statics(req, res, next);
    }

    res.status(403).send('403 Forbidden');

    return null;
};

app.use(sourceMapFilter);

app.get('*', (req, res) => {
    res.set({
        'Cache-Control': 'no-store, no-cache',
        Expires: 0,
    });
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Imbinn engine running on port: ${PORT}!`);
});
