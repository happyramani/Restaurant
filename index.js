const connection = require('./connection');  // Corrected require statement
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); 

app.get('/categorys', (req, res) => {
    connection.query('SELECT * FROM categorys', (err, rows) => {
        if (err) {
            console.error('err' + JSON.stringify(err, undefined, 2));
        } else {

            res.json(rows);
        }
    });
});




app.get('/category/:id', (req, res) => {
    connection.query('SELECT * FROM categorys where CategoryId=?',[req.params.id], (err, rows) => {
        if (err) {
            console.error('err' + JSON.stringify(err, undefined, 2));
        } else {

            res.json(rows);
        }
    });
});

app.delete('/category/:id', (req, res) => {
    connection.query('DELETE FROM categorys where CategoryId=?',[req.params.id], (err, rows) => {
        if (err) {
            console.error('err');
        } else {

            res.json(rows);
        }
    });
});

app.post('/categorys', (req, res) => {
    var cat = req.body
    var catData=[cat.CategoryId, cat.CategoryName, cat.CategoryImage]
    connection.query('INSERT INTO categorys(CategoryId,CategoryName,CategoryImage) values(?)',[catData], (err, rows) => {
        if (err) {
            console.error(err);
        } else {
            res.json(rows);
        }
    });
});

app.patch('/categorys', (req, res) => {
    var cat = req.body
    connection.query('UPDATE categorys SET ? WHERE CategoryId ='+cat.CategoryId,[cat], (err, rows) => {
        if (err) {
            console.error(err);
        } else {
            res.json(rows);
        }
    });
});

app.listen(1545, () => {
    console.log("server started @1545");
});
