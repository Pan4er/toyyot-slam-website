port = process.env.PORT || 3000;

const express = require("express");
const path = require("path");
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
const mailer = require("./static/js/mailer");
const app = express();



app.listen(port);

app.use(express.static(path.resolve(__dirname, 'static')));

app.get("/", function(request, response) {

    response.sendFile(path.resolve(__dirname, 'static', 'main.html'));


});

app.post("/", urlEncodedParser, function(req, res) {
    var message = {
        to: ["tema_921_work@mail.ru", "8etage.beats@gmail.com", "gameacc4her@gmail.com", "georgij.mun@gmail.com", "tanatar2000@gmail.com"],
        subject: req.body.userEmail,
        text: 'Кандидат на вступление в ToyyoT-slam. Провести собеседование, узнать что за чел'
    }
    mailer(message);
    res.sendFile(path.resolve(__dirname, 'static', 'ContactsPost.html'));
});



app.post("/static/makeOrder", urlEncodedParser, function(req, res) {
    var message = {
        to: ["tema_921_work@mail.ru", "8etage.beats@gmail.com", "gameacc4her@gmail.com", "georgij.mun@gmail.com", "tanatar2000@gmail.com"],
        subject: "Новый заказ от : " + req.body.orderName + "\r\n Номер телефона : " + req.body.orderCont,
        text: "Заказ на " + req.body.orderSelect
    }
    mailer(message);
    res.sendFile(path.resolve(__dirname, 'static', 'OrderPost.html'));

})